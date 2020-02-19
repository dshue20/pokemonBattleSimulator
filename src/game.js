import pokemonData from '../data/pokemonData';
import positionData from '../data/positionData';
import stylingData from '../data/stylingData';
import typeColors from '../data/typeColors';
import statsAndMovesData from '../data/statsAndMovesData';
import Player from './player';

export default class PokemonBattle {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.player1 = new Player();
    this.player2 = new Player();
    // this.player1 = new Player(prompt("Player 1, please enter your name"));
    // this.player2 = new Player(prompt("Player 2, please enter your name"));
    // document.addEventListener("click", e => {
    //   const audio = document.getElementById("music");
    //   audio.play();
    // });
    // this.instructions = false;
    // while (!this.instructions){
    //   this.instructionsDisplay();
    // }
    this.currentPlayer = this.player1;
    this.frameCount = 0;
    this.currentLoopIndex1 = 0;
    this.currentLoopIndex2 = 0;
    this.xStart = positionData['pokemonXStart'] + positionData['pokemonXMargin'] + positionData['screenX'];
    this.yStart = positionData['pokemonYStart'] + positionData['screenY'];
    this.turnCounter = 1;
    this.messages = {"Turn 1": []};
    this.paused = false;
    this.getAnimationInfo();
    this.background = this.setBackground();
    this.bindEventHandlers();
    this.drawBackground(this.background);
    this.drawTextbox();
    this.drawPokemon();
    this.drawOptionsDisplay();
  }

  instructionsDisplay(){
    // drawing the box
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(positionData['instructionXStart'], positionData['instructionYStart'], positionData['instructionWidth'], positionData['instructionHeight']);
    this.ctx.fillStyle = "#FFFBCE";
    this.ctx.fillRect(positionData['instructionXStart'] + 4, positionData['instructionYStart'] + 4, positionData['instructionWidth'] - 8, positionData['instructionHeight'] - 8);
    
    // writing the instructions
    this.ctx.fillStyle = "black";
    this.ctx.font = "20px Verdana";
    this.ctx.fillText("X", positionData['instructionXStart'] + 15, positionData['instructionYStart'] + 30);
    this.ctx.font = "bold 20px Verdana";
    this.ctx.fillText("Instructions", positionData['instructionXStart'] + 130, positionData['instructionYStart'] + 30);
    this.ctx.font = "14px Verdana";
    this.ctx.fillText("This Pokemon Battle Simulator randomly generates", positionData['instructionXStart'] + 15, positionData['instructionYStart'] + 60);
    this.ctx.fillText("two teams of six Pokemon.", positionData['instructionXStart'] + 15, positionData['instructionYStart'] + 80);
    this.ctx.fillText("Players will take turns selecting moves with", positionData['instructionXStart'] + 15, positionData['instructionYStart'] + 110);
    this.ctx.fillText("which to attack or other Pokemon to switch in.", positionData['instructionXStart'] + 15, positionData['instructionYStart'] + 130);
    this.ctx.fillText("Text commentary is shown on the right side.", positionData['instructionXStart'] + 15, positionData['instructionYStart'] + 160)
    this.ctx.fillText("A player is declared the winner once all of his", positionData['instructionXStart'] + 15, positionData['instructionYStart'] + 190);
    this.ctx.fillText("or her opponent's Pokemon have fainted!", positionData['instructionXStart'] + 15, positionData['instructionYStart'] + 210);
    this.ctx.fillText("Press the 'X' on the top left corner to close", positionData['instructionXStart'] + 15, positionData['instructionYStart'] + 240);
    this.ctx.fillText("this instructions pane.", positionData['instructionXStart'] + 15, positionData['instructionYStart'] + 260);
  }

  getAnimationInfo(){
    this.firstPoke1 = this.player2.party[0].name
    this.firstPoke2 = this.player1.party[0].name
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
  }

  drawTextbox(){
    this.ctx.fillStyle = "black";

    // draw instructions button
    this.ctx.fillRect(positionData['textXStart'], 0, positionData['instructionButtonWidth'], positionData['instructionButtonHeight']);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(positionData['textXStart'] + 1, 1, positionData['instructionButtonWidth'] - 2, positionData['instructionButtonHeight'] - 2);
    this.ctx.font = "bold 12px Verdana";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Instructions", positionData['textXStart'] + 8 , 18);

    // draw textbox
    this.ctx.fillRect(positionData['textXStart'], positionData['textYStart'], positionData['textWidth'], positionData['textHeight']);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(positionData['textXStart'] + 1, positionData['textYStart'] + 1, positionData['textWidth'] - 2, positionData['textHeight'] - 2);
    this.messageDisplay();
  }

  drawPokemon(){
    // get image sources for the pokemon
    let frontPokemon = new Image();
    frontPokemon.src = this.src1[this.currentLoopIndex1];
    let backPokemon = new Image();
    backPokemon.src = this.src2[this.currentLoopIndex2];

    backPokemon.onload = () => {
      if (!this.paused){
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
      window.requestAnimationFrame(() => this.drawPokemon());
    }
  }

  drawOptionsDisplay(){
    this.turnDisplay();
    this.movesDisplay();
    this.switchDisplay();
  }

  messageDisplay(){
    this.ctx.clearRect(positionData['textXStart'] + 2, positionData['textYStart'] + 2, positionData['textWidth'] - 3, positionData['textHeight'] - 3);
    while (Object.keys(this.messages).length > 3){
      delete this.messages["Turn " + (this.turnCounter-3).toString()];
    }
    let y = 30 + positionData['textYStart'];
    this.ctx.fillStyle = "black";
    Object.keys(this.messages).forEach(turn => {
      this.ctx.font = "bold 20px Verdana";
      this.ctx.fillText(turn, positionData['textXStart'] + 20, y);
      y += 20;
      this.messages[turn].forEach(message => {
        this.ctx.font = "14px Verdana";
        this.ctx.fillText(message, positionData['textXStart'] + 20, y);
        y += 20;
      })
      y += 10;
    })
  }

  turnDisplay(){
    this.ctx.clearRect(positionData['turnDisplayX'], positionData['turnDisplayY'] - 30, positionData['turnDisplayWidth'], positionData['turnDisplayHeight'] * 2 + 10);
    this.ctx.font = "bold 22px Verdana";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(this.currentPlayer === this.player1 ? this.player1.name + "'s" : this.player2.name + "'s", positionData['turnDisplayX'], positionData['turnDisplayY']);
    let turnOrSwitch = this.currentPlayer.party[0].currentStats['hp'] <= 0 ? 'Switch!' : 'Turn!';
    this.ctx.fillText(turnOrSwitch, positionData['turnDisplayX'], positionData['turnDisplayY'] + positionData['turnDisplayHeight']);
  }

  movesDisplay(){
    this.ctx.clearRect(positionData['turnDisplayWidth'] + 20, positionData['moveYStart'], 2 * positionData['moveWidth'] + 2 * positionData['moveXMargin'], positionData['moveHeight'] + 50)
    this.pokemonMoves = statsAndMovesData[this.currentPlayer.party[0].name]['moves'];
    for (let i=0; i < Object.keys(this.pokemonMoves).length; i++){
        let typeColor = typeColors[this.pokemonMoves[Object.keys(this.pokemonMoves)[i]]['type']]
        let x = i % 2 === 0 ? positionData['moveXStart'] : positionData['moveXStart'] + positionData['moveWidth'] + 10;
        let y = i < 2 ? positionData['moveYStart'] : positionData['moveYStart'] + positionData['moveHeight'] + 10;
        this.ctx.fillStyle = typeColor;
        this.ctx.fillRect(x, y, positionData['moveWidth'], positionData['moveHeight']);
        this.ctx.fillStyle = typeColor === "black" ? "black" : "white";
        this.ctx.font = "bold 16px Verdana";
        this.ctx.textAlign = "center";
        this.ctx.fillText(Object.keys(this.pokemonMoves)[i], x + positionData['moveWidth'] / 2, y + positionData['moveHeight'] / 2 + 5);
    }
  }

  switchDisplay(){
    this.ctx.textAlign = "start";
    this.ctx.fillStyle = 'black';
    this.ctx.clearRect(positionData['pokemonXStart'], positionData['pokemonYStart'], positionData['pokemonWidth'] * 6 + positionData['pokemonXMargin'] * 5, positionData['pokemonHeight'] * 3)
    let x = [];
    for (let i = 0; i < 6; i++){
        x.push(positionData['pokemonXStart'] + positionData['pokemonXStart2'] * i);
    };
    for (let counter = 0; counter < 6; counter++){
      const y = positionData['pokemonYStart'];
      this.ctx.fillStyle = "black";

      this.ctx.fillRect(positionData['pokemonXMargin'] + x[counter], y, positionData['pokemonWidth'], positionData['pokemonHeight']);
      if (counter === 0){
          this.ctx.fillStyle = stylingData['selectedPokemon']
      } else {
          this.ctx.fillStyle = "white";
      }
      this.ctx.fillRect(positionData['pokemonXMargin'] + 1 + x[counter], y+1, positionData['pokemonWidth'] - 2, positionData['pokemonHeight'] - 2);
      // icons are 30x30ish
      let icon = new Image();
      icon.src = "images/icons/" + this.currentPlayer.party[counter].name.toLowerCase() + ".png";
      icon.onload = () => {
          this.ctx.drawImage(icon, positionData['pokemonXMargin'] + 2 + x[counter], y-5);
          this.ctx.font = "13px Verdana";
          this.ctx.fillStyle = "black";
          if (this.currentPlayer.party[counter].name === "Mrmime"){
              this.ctx.fillText("Mr. Mime", positionData['iconXStart'] + x[counter], positionData['iconYStart'] + y);
          } else {
              this.ctx.fillText(this.currentPlayer.party[counter].name, positionData['iconXStart'] + x[counter], positionData['iconYStart'] + y);
          };
          // draw HP bar
          this.ctx.fillText("HP: ", x[counter] + 20, positionData['hpYStart']);
          let percentHp = this.currentPlayer.party[counter].currentStats['hp'] / (statsAndMovesData[this.currentPlayer.party[counter].name]['hp'] * 2 + 141);
          let hpX;
          if (percentHp > 0 && percentHp < 0.25){
              hpX = 0.45;
              this.ctx.fillStyle = "red";
          } else if (percentHp >= 0.25 && percentHp < 0.5){
              hpX = 0.6;
              this.ctx.fillStyle = "yellow";
          } else if (percentHp >= 0.5 && percentHp < 0.75){
              hpX = 0.8;
              this.ctx.fillStyle = "green";
          } else if (percentHp >= 0.75 && percentHp <= 1){
              hpX = 1;
              this.ctx.fillStyle = "green";
          }
          if (percentHp >= 0){
              this.ctx.beginPath();
              this.ctx.moveTo(x[counter] + positionData['hpBarXMargin'], positionData['hpBarYStart']);
              this.ctx.lineTo(x[counter] + positionData['moveWidth'] * hpX - 5, positionData['hpBarYStart']);
              this.ctx.quadraticCurveTo(x[counter] + positionData['moveWidth'] * hpX, positionData['hpBarYStart'] + 5, x[counter] + positionData['moveWidth'] * hpX - 5, positionData['hpBarYStart'] + 10);
              this.ctx.lineTo(x[counter] + positionData['hpBarXMargin'], positionData['hpBarYStart'] + 10);
              this.ctx.quadraticCurveTo(x[counter] + positionData['hpBarXMargin'] - 5, positionData['hpBarYStart'] + 5, x[counter] + positionData['hpBarXMargin'], positionData['hpBarYStart']);
              this.ctx.stroke();
              this.ctx.fill();
          }
      };
    }
  }

  bindEventHandlers() {
    this.canvas.addEventListener('click', e => {
      // this is the area with switch pokemon options
      if (e.screenX >= this.xStart && e.screenY >= this.yStart && e.screenX <= this.xStart + positionData['pokemonXStart2'] * 5 + positionData['pokemonWidth'] && e.screenY <= this.yStart + positionData['pokemonHeight']){
        this.switchHandler(e);
      } // and this is the area with move options
      else if (e.screenX >= positionData['moveXStart'] && e.screenY >= positionData['moveClickY'] && e.screenX <= positionData['moveXStart'] + positionData['moveWidth'] * 2 + 10 && e.screenY <= positionData['moveClickY'] + positionData['moveHeight'] * 2 + 10){
          this.moveHandler(e);
      } else if (e.screenX >= positionData['screenX'] + positionData['textXStart'] && e.screenY >= positionData['screenY'] && e.screenX <= positionData['screenX'] + positionData['textXStart'] + positionData['instructionButtonWidth'] && e.screenY <= positionData['screenY'] + positionData['instructionButtonHeight']){
        this.paused = true;
        this.instructionsDisplay();
      } else if (e.screenX >= positionData['xXStart'] && e.screenY >= positionData['xYStart'] && e.screenX <= positionData['xXEnd'] && e.screenY <= positionData['xYEnd']){
        this.paused = false;
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.drawTextbox();
        this.drawOptionsDisplay();
      };
    })
  }

  switchHandler(e){
    for (let i=1; i < 6; i++){
      if (e.screenX >=  this.xStart + positionData['pokemonXStart2'] * i && e.screenX <= this.xStart + positionData['pokemonXStart2'] * i + positionData['moveWidth']){
        if (this.currentPlayer.party[i].currentStats['hp'] > 0){
          this.currentPlayer.party.unshift(this.currentPlayer.party.splice(i,1)[0]);
          this.messages["Turn " + this.turnCounter.toString()].push(this.currentPlayer.name + " sent out " + this.currentPlayer.party[0].name + "!");
          // update party order and display again
          this.currentPlayer.switched = true;
          if (!this.currentPlayer.faint){
            this.switchTurn();
          } else {
            this.afterPokemonSwitch();
            this.messageDisplay();
            this.resetTurn();
            this.currentPlayer = this.player1;
            this.drawOptionsDisplay();
          }
        } else {
          this.drawOptionsDisplay();
        }
      }
    }
  }

  moveHandler(e){
    // if player needs to switch, don't let them select a move
    if (this.currentPlayer.faint) return;
    // find which move was selected
    // in order of moves: top left, top right, bottom left, bottom right
    let move;
    let moveName;
    if (e.screenX >= positionData['moveXStart'] && e.screenY >= positionData['moveClickY'] && e.screenX <= positionData['moveXStart'] + positionData['moveWidth'] && e.screenY <= positionData['moveClickY'] + positionData['moveHeight']){
      moveName = Object.keys(this.pokemonMoves)[0];  
      move = Object.assign({}, {[moveName]: Object.values(this.pokemonMoves)[0]});
    } else if (e.screenX >= positionData['moveXStart'] + positionData['moveWidth'] + 10 && e.screenY >= positionData['moveClickY'] && e.screenX <= positionData['moveXStart'] + positionData['moveWidth'] * 2 + 10 && e.screenY <= positionData['moveClickY'] + positionData['moveHeight']){
      moveName = Object.keys(this.pokemonMoves)[1];  
      move = Object.assign({}, {[moveName]: Object.values(this.pokemonMoves)[1]});
    } else if (e.screenX >= positionData['moveXStart'] && e.screenY >= positionData['moveClickY'] + positionData['moveHeight'] + 10 && e.screenX <= positionData['moveXStart'] + positionData['moveWidth'] && e.screenY <= positionData['moveClickY'] + positionData['moveHeight'] + positionData['moveHeight'] * 2 + 10){
      moveName = Object.keys(this.pokemonMoves)[2];
      move = Object.assign({}, {[moveName]: Object.values(this.pokemonMoves)[2]});
    } else if (e.screenX >= positionData['moveXStart'] + positionData['moveWidth'] + 10 && e.screenY >= positionData['moveClickY'] + positionData['moveHeight'] + 10 && e.screenX <= positionData['moveXStart'] + positionData['moveWidth'] * 2 + 10 && e.screenY <= positionData['moveClickY'] + positionData['moveHeight'] + positionData['moveHeight'] * 2 + 10){
      moveName = Object.keys(this.pokemonMoves)[3];  
      move = Object.assign({}, {[moveName]: Object.values(this.pokemonMoves)[3]});
    };
    if (move){
      this.currentPlayer.move = move;
      this.switchTurn();
    }
  }

  switchTurn(){
    if (this.currentPlayer === this.player2) this.finishTurn();
    if (!this.currentPlayer.faint){
      this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
      this.drawOptionsDisplay();
    }
  }

  afterPokemonSwitch(){
    // refetch animation info, switch turn upon pokemon switch
    if (this.player1.switched){
      this.currentLoopIndex2 = 0;
    }
    if (this.player2.switched){
      this.currentLoopIndex1 = 0;
    }
    this.getAnimationInfo();
  }

  handleMove(){
    let player1Poke = this.player1.party[0];
    let player2Poke = this.player2.party[0];
    if (this.player1.move && this.player2.move){
      // find out who goes first if both pokemon make a move
      let fasterPlayer;
      let slowerPlayer;
      let fasterPokemon;
      let slowerPokemon;
      let fasterMove;
      let slowerMove;
      if (player1Poke.currentStats['speed'] > player2Poke.currentStats['speed']){
        fasterPokemon = player1Poke;
      } else if (player2Poke.currentStats['speed'] > player1Poke.currentStats['speed']){
        fasterPokemon = player2Poke;
      } else {
        fasterPokemon = Math.floor(Math.random() * 2) < 1 ? player1Poke : player2Poke;
      }
      if (fasterPokemon === player1Poke){
        slowerPokemon = player2Poke;
        fasterMove = this.player1.move;
        slowerMove = this.player2.move;
        fasterPlayer = this.player1;
        slowerPlayer = this.player2;
      } else {
        slowerPokemon = player1Poke;
        fasterMove = this.player2.move;
        slowerMove = this.player2.move;
        fasterPlayer = this.player2;
        slowerPlayer = this.player1;
      }
      this.messages["Turn " + this.turnCounter.toString()].push(fasterPlayer.name + "'s " + fasterPokemon.name + ' used ' + Object.keys(fasterMove)[0] + '!');
      this.calculateDamage(Object.values(fasterMove)[0], fasterPokemon, slowerPokemon);
      if (!this.checkFaint(slowerPokemon)){
        this.messages["Turn " + this.turnCounter.toString()].push(slowerPlayer.name + "'s " + slowerPokemon.name + ' used ' + Object.keys(slowerMove)[0] + '!');
        this.calculateDamage(Object.values(slowerMove)[0], slowerPokemon, fasterPokemon);
        this.checkFaint(fasterPokemon);
      }
    } else if (this.player1.move){
      this.messages["Turn " + this.turnCounter.toString()].push(this.player1.name + "'s " + player1Poke.name + ' used ' + Object.keys(this.player1.move)[0] + '!');
      this.calculateDamage(Object.values(this.player1.move)[0], player1Poke, player2Poke);
      this.checkFaint(player2Poke);
    } else if (this.player2.move){
      this.messages["Turn " + this.turnCounter.toString()].push(this.player2.name + "'s " + player2Poke.name + ' used ' + Object.keys(this.player2.move)[0] + '!');
      this.calculateDamage(Object.values(this.player2.move)[0], player2Poke, player1Poke);
      this.checkFaint(player1Poke);
    }
  }

  calculateDamage(move, attackingPoke, defendingPoke){
    let attack;
    let defense;
    let stab = 1;
    if (move['power'] > 0){
      if (move['category'] === 'physical'){
        attack = attackingPoke.currentStats['attack'];
        defense = defendingPoke.currentStats['defense'];
      } else {
        attack = attackingPoke.currentStats['spAtk'];
        defense = defendingPoke.currentStats['spDef'];
      }
      if (attackingPoke.currentStats['types'].includes(move['type'])) stab = 1.2;
      let damage = (42 * move['power'] * attack / defense / 50 + 2) * stab;
      let damagePercent = Math.round(1000 * (damage / defendingPoke.fullHealth)) / 10;
      let percentHp = Math.round(1000 * defendingPoke.currentStats['hp'] / defendingPoke.fullHealth) / 10;
      let printDamage = defendingPoke.currentStats['hp'] > 0 ? damagePercent : percentHp;
      defendingPoke.currentStats['hp'] -= damage;
      this.messages["Turn " + this.turnCounter.toString()].push("The opposing " + defendingPoke.name + " lost " + printDamage.toString() + "% of its health!")
    }
  }

  checkFaint(faintPoke){
    if (faintPoke.currentStats['hp'] <= 0){
      this.messages["Turn " + this.turnCounter.toString()].push(faintPoke.name + " fainted!");
      this.checkGameOver();
      if (faintPoke === this.player1.party[0]) this.currentPlayer = this.player1;
      this.currentPlayer.faint = true;
      this.drawOptionsDisplay();
      return true;
    }
    return false;
  }

  resetTurn(){
    this.player1.switched = false;
    this.player2.switched = false;
    this.player1.move = null;
    this.player2.move = null;
    this.player1.faint = false;
    this.player2.faint = false;
    this.turnCounter++;
    this.messages["Turn " + this.turnCounter.toString()] = [];
    this.messageDisplay();
  }

  finishTurn(){
    this.afterPokemonSwitch();
    this.handleMove();
    if (!this.currentPlayer.faint) this.resetTurn();
    this.messageDisplay();
  }

  checkGameOver(){
    let player1Poke = Object.values(this.player1.party).filter(pokemon => pokemon.currentStats['hp'] > 0);
    let player2Poke = Object.values(this.player2.party).filter(pokemon => pokemon.currentStats['hp'] > 0);
    if (player1Poke.length === 0){
      this.messages["Turn " + this.turnCounter.toString()].push(this.player2.name + " wins!")
      this.messageDisplay();
      return true;
    } else if (player2Poke.length === 0){
      this.messages["Turn " + this.turnCounter.toString()].push(this.player2.name + " wins!")
      this.messageDisplay();
      return true;
    } else {
      return false;
    }
  }
}