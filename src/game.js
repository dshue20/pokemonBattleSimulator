import pokemonData from '../data/pokemonData';
import positionData from '../data/positionData';
import Player from './player';
import Turn from './turn';

export default class PokemonBattle {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.frontPlayer = new Player();
    this.backPlayer = new Player();
    this.frameCount = 0;
    this.currentLoopIndex1 = 0;
    this.currentLoopIndex2 = 0;
    this.getAnimationInfo();
    this.background = this.setBackground();
    this.drawBackground(this.background);
    this.backPlayerTurn = new Turn(canvas, this.backPlayer);
    this.currentTurn = this.backPlayerTurn;
    this.clickHandler = this.currentTurn.clickHandler.bind(this.currentTurn);
    this.ctx.canvas.addEventListener("click", this.clickHandler);
    this.play();
  }

  getAnimationInfo(){
    const firstPoke1 = this.frontPlayer.party[0]
    const firstPoke2 = this.backPlayer.party[0]
    this.cycleLoop1 = [...Array(pokemonData['front' + firstPoke1]['animationFrames']).keys()];
    this.cycleLoop2 = [...Array(pokemonData['back' + firstPoke2]['animationFrames']).keys()];
    this.src1 = this.cycleLoop1.map(num => num < 10 ? 
      "images/pokemon/" + firstPoke1.toLowerCase() + "-front/frame_0"+ num.toString() + "_delay-" + pokemonData['front' + firstPoke1]['delay'] + ".gif" : 
      "images/pokemon/" + firstPoke1.toLowerCase() + "-front/frame_"+ num.toString() + "_delay-" + pokemonData['front' + firstPoke1]['delay'] + ".gif");
    this.src2 = this.cycleLoop2.map(num => num < 10 ? 
      "images/pokemon/" + firstPoke2.toLowerCase() + "-back/frame_0"+ num.toString() + "_delay-" + pokemonData['back' + firstPoke2]['delay'] + ".gif" : 
      "images/pokemon/" + firstPoke2.toLowerCase() + "-back/frame_"+ num.toString() + "_delay-" + pokemonData['back' + firstPoke2]['delay'] + ".gif");
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
    this.ctx.drawImage(background, 0, 0, 500, 360);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(positionData['textXStart'], 0, 280, 500);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(positionData['textXStart'] + 1, 1, 278, 498);
  }

  turnDisplay(){
    this.ctx.clearRect(positionData['turnDisplayX'], positionData['turnDisplayY'] - 30, positionData['turnDisplayWidth'], positionData['turnDisplayHeight'] * 2 + 10);
    this.ctx.font = "bold 24px Verdana";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(this.currentTurn === this.backPlayerTurn ? "Player 1's" : "Player 2's", positionData['turnDisplayX'], positionData['turnDisplayY']);
    this.ctx.fillText("Turn!", positionData['turnDisplayX'], positionData['turnDisplayY'] + positionData['turnDisplayHeight']);
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
        let pokemon1 = 'front' + this.frontPlayer.party[0];
        let pokemon2 = 'back' + this.backPlayer.party[0];
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

  afterPokemonSwitch(){
    // refetch animation info, switch turn upon pokemon switch
    const backPlayerSwitch = !this.src2[0].includes(this.backPlayer.party[0].toLowerCase());
    const frontPlayerSwitch = !this.src1[0].includes(this.frontPlayer.party[0].toLowerCase());
    if (backPlayerSwitch || frontPlayerSwitch){
      if (backPlayerSwitch){
        this.currentLoopIndex2 = 0;
        this.frontPlayerTurn = new Turn(this.canvas, this.frontPlayer);
        this.currentTurn = this.frontPlayerTurn;
      } else if (frontPlayerSwitch){
        this.currentLoopIndex1 = 0;
        this.backPlayerTurn = new Turn(this.canvas, this.backPlayer);
        this.currentTurn = this.backPlayerTurn;
      }
      this.getAnimationInfo();
      this.ctx.canvas.removeEventListener("click", this.clickHandler);
      this.clickHandler = this.currentTurn.clickHandler.bind(this.currentTurn);
      this.ctx.canvas.addEventListener("click", this.clickHandler);
    }
  }

  play(){
    this.turnDisplay();
    // do stuff if the player switches pokemon
    this.afterPokemonSwitch();
    this.drawPokemon();
    window.requestAnimationFrame(() => this.play());
  }
}