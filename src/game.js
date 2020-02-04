import pokemonData from '../data/pokemonData';
import Player from './player';

export default class PokemonBattle {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.player1 = new Player();
    this.player2 = new Player();
    this.currentLoopIndex1 = 0;
    this.currentLoopIndex2 = 0;
    this.frameCount = 0;
    this.getAnimationInfo();
    this.background = this.setBackground();
    this.drawBackground(this.background);
    // this.drawFrontPokemon("pikachu-front");
    // this.drawBackPokemon("pikachu-back");
    this.drawPokemon();
  }

  getAnimationInfo(){
    const firstPoke1 = this.player1.party[0]
    const firstPoke2 = this.player2.party[0]
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
    //background.src = src[Math.floor(Math.random() * src.length)];
    background.src = "images/backgrounds/background1.png";
    return background;
  }

  drawBackground(background){
    this.ctx.drawImage(background, 0, 0, 500, 360);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(520, 0, 280, 500);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(521, 1, 278, 498);
  }

  drawPokemon(){
    let frontPokemon = new Image();
    frontPokemon.src = this.src1[this.currentLoopIndex1];
    let backPokemon = new Image();
    backPokemon.src = this.src2[this.currentLoopIndex2];
    backPokemon.onload = () => {
      this.frameCount++;
      if (this.frameCount > 2) {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.drawBackground(this.background);
        let pokemon1 = 'front' + this.player1.party[0];
        let pokemon2 = 'back' + this.player2.party[0];
        this.ctx.drawImage(frontPokemon, pokemonData[pokemon1]['x'], pokemonData[pokemon1]['y'], pokemonData[pokemon1]['width'], pokemonData[pokemon1]['height']);
        this.ctx.drawImage(backPokemon, pokemonData[pokemon2]['x'], pokemonData[pokemon2]['y'], pokemonData[pokemon2]['width'], pokemonData[pokemon2]['height']);
        this.currentLoopIndex2++;
        if (this.currentLoopIndex2 >= this.cycleLoop2.length) {
          this.currentLoopIndex2 = 0;
        }
        this.currentLoopIndex1++;
        if (this.currentLoopIndex1 >= this.cycleLoop1.length) {
          this.currentLoopIndex1 = 0;
        }
        this.frameCount = 0;
      }
      window.requestAnimationFrame(() => this.drawPokemon());
    }
  }
}