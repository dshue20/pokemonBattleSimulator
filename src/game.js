import pokemonData from '../data/pokemonData';
import positionData from '../data/positionData';
import statsAndMovesData from '../data/statsAndMovesData';
import Player from './player';
import Turn from './turn';

export default class PokemonBattle {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.frontPlayer = new Player();
    this.backPlayer = new Player();
    this.firstPoke1 = '';
    this.firstPoke2 = '';
    this.frameCount = 0;
    this.currentLoopIndex1 = 0;
    this.currentLoopIndex2 = 0;
    this.switched = false;
    this.getAnimationInfo();
    this.background = this.setBackground();
    this.drawBackground(this.background);
    this.backPlayerTurn = new Turn(canvas, this.backPlayer, 'back');
    this.currentTurn = this.backPlayerTurn;
    this.clickHandler = this.currentTurn.clickHandler.bind(this.currentTurn);
    this.ctx.canvas.addEventListener("click", this.clickHandler);
    this.play();
  }

  getAnimationInfo(){
    this.firstPoke1 = this.frontPlayer.party[0]
    this.firstPoke2 = this.backPlayer.party[0]
    this.cycleLoop1 = [...Array(pokemonData['front' + this.firstPoke1]['animationFrames']).keys()];
    this.cycleLoop2 = [...Array(pokemonData['back' + this.firstPoke2]['animationFrames']).keys()];
    this.src1 = this.cycleLoop1.map(num => num < 10 ? 
      "images/pokemon/" + this.firstPoke1.toLowerCase() + "-front/frame_0"+ num.toString() + "_delay-" + pokemonData['front' + this.firstPoke1]['delay'] + ".gif" : 
      "images/pokemon/" + this.firstPoke1.toLowerCase() + "-front/frame_"+ num.toString() + "_delay-" + pokemonData['front' + this.firstPoke1]['delay'] + ".gif");
    this.src2 = this.cycleLoop2.map(num => num < 10 ? 
      "images/pokemon/" + this.firstPoke2.toLowerCase() + "-back/frame_0"+ num.toString() + "_delay-" + pokemonData['back' + this.firstPoke2]['delay'] + ".gif" : 
      "images/pokemon/" + this.firstPoke2.toLowerCase() + "-back/frame_"+ num.toString() + "_delay-" + pokemonData['back' + this.firstPoke2]['delay'] + ".gif");
  }

  setBackground(){
    let arr = [...Array(8).keys()];
    const src = arr.map(num => "images/backgrounds/background" + num.toString() + ".png");
    let background = new Image();
    background.src = src[Math.floor(Math.random() * src.length)];
    //background.src = "images/backgrounds/background1.png";
    return background;
  }

  drawBackground(background){
    this.ctx.drawImage(background, 0, 0, positionData['backgroundWidth'], positionData['backgroundHeight']);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(positionData['textXStart'], 0, positionData['textWidth'], positionData['textHeight']);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(positionData['textXStart'] + 1, 1, positionData['textWidth'] - 2, positionData['textHeight'] - 2);
  }

  drawPokemon(){
    // get image sources for the pokemon
    let frontPokemon = new Image();
    frontPokemon.src = this.src1[this.currentLoopIndex1];
    let backPokemon = new Image();
    backPokemon.src = this.src2[this.currentLoopIndex2];

    backPokemon.onload = () => {
      // frameCount used for animation
      this.frameCount++;
      if (this.frameCount > 1) {
        // clear battle screen
        this.ctx.clearRect(0, 0, positionData['backgroundWidth'], positionData['backgroundHeight'] + 10);
        this.drawBackground(this.background);
        let pokemon1 = 'front' + this.firstPoke1;
        let pokemon2 = 'back' + this.firstPoke2;
        this.ctx.drawImage(frontPokemon, pokemonData[pokemon1]['x'], pokemonData[pokemon1]['y'], pokemonData[pokemon1]['width'], pokemonData[pokemon1]['height']);
        this.ctx.drawImage(backPokemon, pokemonData[pokemon2]['x'], pokemonData[pokemon2]['y'], pokemonData[pokemon2]['width'], pokemonData[pokemon2]['height']);
        this.currentLoopIndex2++;
        // reset animation counters
        if (this.currentLoopIndex2 >= this.cycleLoop2.length) {
          this.currentLoopIndex2 = 0;
        }
        this.currentLoopIndex1++;
        if (this.currentLoopIndex1 >= this.cycleLoop1.length) {
          this.currentLoopIndex1 = 0;
        }
        this.frameCount = 0;
      }
    }
  }

  switchTurn(){
    if (this.backPlayer.switched || this.backPlayer.move) {
      if (!this.switched){ 
        this.frontPlayerTurn = new Turn(this.canvas, this.frontPlayer, 'front');
        this.currentTurn = this.frontPlayerTurn;
        this.ctx.canvas.removeEventListener("click", this.clickHandler);
        this.clickHandler = this.currentTurn.clickHandler.bind(this.currentTurn);
        this.ctx.canvas.addEventListener("click", this.clickHandler);
        this.switched = true;
      }
    };
  }

  readyForAction(){
    return ((this.backPlayer.switched || this.backPlayer.move) && (this.frontPlayer.switched || this.frontPlayer.move))
  }

  afterPokemonSwitch(){
    // refetch animation info, switch turn upon pokemon switch
    if (this.backPlayer.switched){
      this.currentLoopIndex2 = 0;
    }
    if (this.frontPlayer.switched){
      this.currentLoopIndex1 = 0;
    }
    this.getAnimationInfo();
  }

  handleMove(){
    if (this.backPlayer.move && this.frontPlayer.move){
      if (this.backPlayer.currentPokemonStats[this.backPlayer.party[0]]['speed'] >= this.backPlayer.currentPokemonStats[this.backPlayer.party[0]]['speed']){
        this.calculateDamage(this.backPlayer.move, this.backPlayer, this.frontPlayer)
        if (this.frontPlayer.currentPokemonStats[this.frontPlayer.party[0]]['hp'] > 0){
          this.calculateDamage(this.frontPlayer.move, this.frontPlayer, this.backPlayer)
        } else {
          debugger;
          this.frontPlayer.waitForSwitch = true;
          this.frontPlayerTurn = new Turn(this.canvas, this.frontPlayer, 'front');
          this.currentTurn = this.frontPlayerTurn;
          this.ctx.canvas.removeEventListener("click", this.clickHandler);
          this.clickHandler = this.currentTurn.clickHandler.bind(this.currentTurn);
          this.ctx.canvas.addEventListener("click", this.clickHandler);
        }
      }
    } else if (this.backPlayer.move) {
      this.calculateDamage(this.backPlayer.move, this.backPlayer, this.frontPlayer)
    } else if (this.frontPlayer.move){
      this.calculateDamage(this.frontPlayer.move, this.frontPlayer, this.backPlayer)
    }
  }

  calculateDamage(move, attackingPlayer, defendingPlayer){
    let attack;
    let defense;
    let stab = 1;
    let attackingPokemon = statsAndMovesData[attackingPlayer.party[0]];
    let defendingPokemon = statsAndMovesData[defendingPlayer.party[0]];
    if (move['power'] > 0){
      if (move['category'] === 'physical'){
        attack = attackingPokemon['attack'];
        defense = defendingPokemon['defense'];
      } else {
        attack = attackingPokemon['spAtk'];
        defense = defendingPokemon['spDef'];
      }
      if (attackingPokemon['types'].includes(move['type'])) stab = 1.2;
      let newHp = defendingPlayer.currentPokemonStats[defendingPlayer.party[0]]['hp'] - ((42 * move['power'] * attack / defense / 50 + 2) * stab);
      defendingPlayer.currentPokemonStats[defendingPlayer.party[0]]['hp'] = newHp;
    }
  }

  turnReset(){
    this.frontPlayer.switched = false;
    this.backPlayer.switched = false;
    this.frontPlayer.move = false;
    this.backPlayer.move = false;
    this.switched = false;
    this.backPlayer.waitForSwitch = false;
    this.frontPlayer.waitForSwitch = false;
  }

  play(){
    // wait for first player to do something
    this.switchTurn();
    // if both players have made a move
    if (this.readyForAction()){
      // do stuff if the player switches pokemon
      this.afterPokemonSwitch();
      this.handleMove();
      if (!this.frontPlayer.waitForSwitch && !this.backPlayer.waitForSwitch){
        this.turnReset();
        this.ctx.canvas.removeEventListener("click", this.clickHandler);
        this.currentTurn = this.backPlayerTurn;
        this.clickHandler = this.currentTurn.clickHandler.bind(this.currentTurn);
        this.ctx.canvas.addEventListener("click", this.clickHandler);
        this.backPlayerTurn = new Turn(this.canvas, this.backPlayer, 'back');
      }
    }
    this.drawPokemon();
    window.requestAnimationFrame(() => this.play());
  }

  // back player turn display
  // front player turn display
  // faster switch
  // slower switch
  // faster attack
  // slower attack
}