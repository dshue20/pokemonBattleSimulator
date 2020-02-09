import positionData from '../data/positionData';
import stylingData from '../data/stylingData';
import typeColors from '../data/typeColors';
import statsAndMovesData from '../data/statsAndMovesData';

export default class Turn {
    constructor(canvas, player, whichPlayer){
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.player = player;
        this.whichPlayer = whichPlayer;
        //console.log(player.party);
        this.pokemon = player.party;
        this.xStart = positionData['pokemonXStart'] + positionData['pokemonXMargin'] + positionData['screenX'];
        this.yStart = positionData['pokemonYStart'] + positionData['screenY'];
        this.pokemonMoves = statsAndMovesData[this.pokemon[0]]['moves'];
        this.turnDisplay();
        this.movesDisplay();
        this.switchDisplay();
    }

    turnDisplay(){
        this.ctx.clearRect(positionData['turnDisplayX'], positionData['turnDisplayY'] - 30, positionData['turnDisplayWidth'], positionData['turnDisplayHeight'] * 2 + 10);
        this.ctx.font = "bold 24px Verdana";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(this.whichPlayer === 'back' ? "Player 1's" : "Player 2's", positionData['turnDisplayX'], positionData['turnDisplayY']);
        this.ctx.fillText("Turn!", positionData['turnDisplayX'], positionData['turnDisplayY'] + positionData['turnDisplayHeight']);
    }

    movesDisplay(){
        this.ctx.clearRect(positionData['turnDisplayWidth'] + 20, positionData['moveYStart'], this.dimensions['width'], positionData['moveHeight'] + 50)
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
        this.ctx.clearRect(positionData['pokemonXStart'], positionData['pokemonYStart'], positionData['pokemonWidth'] * 3 + positionData['pokemonXMargin'] * 2, positionData['pokemonHeight'] * 3)
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
            icon.src = "images/icons/" + this.pokemon[counter].toLowerCase() + ".png";
            icon.onload = () => {
                this.ctx.drawImage(icon, positionData['pokemonXMargin'] + 2 + x[counter], y-5);
                this.ctx.font = "13px Verdana";
                this.ctx.fillStyle = "black";
                if (this.pokemon[counter] === "Mrmime"){
                    this.ctx.fillText("Mr. Mime", positionData['iconXStart'] + x[counter], positionData['iconYStart'] + y);
                } else {
                    this.ctx.fillText(this.pokemon[counter], positionData['iconXStart'] + x[counter], positionData['iconYStart'] + y);
                };
                //debugger;
                // draw HP bar
                this.ctx.fillText("HP: ", x[counter] + 20, positionData['hpYStart']);
                let percentHp = this.player.currentPokemonStats[this.pokemon[counter]]['hp'] / (statsAndMovesData[this.pokemon[counter]]['hp'] * 2 + 141);
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
                //debugger;
            };
        }
    }

    clickHandler(e){
        // this is the area with switch pokemon options
        if (e.screenX >= this.xStart && e.screenY >= this.yStart && e.screenX <= this.xStart + positionData['pokemonXStart2'] * 5 + positionData['pokemonWidth'] && e.screenY <= this.yStart + positionData['pokemonHeight']){
            this.switchHandler(e);
        } // and this is the area with move options
        else if (e.screenX >= positionData['moveXStart'] && e.screenY >= positionData['moveClickY'] && e.screenX <= positionData['moveXStart'] + positionData['moveWidth'] * 2 + 10 && e.screenY <= positionData['moveClickY'] + positionData['moveHeight'] * 2 + 10){
            this.moveHandler(e);
        };
    }

    switchHandler(e){
        for (let i=1; i < 6; i++){
            if (e.screenX >=  this.xStart + positionData['pokemonXStart2'] * i && e.screenX <= this.xStart + positionData['pokemonXStart2'] * i + positionData['moveWidth']){
                this.pokemon.unshift(this.pokemon.splice(i,1)[0]);
                // update party order and display again
                this.player.switched = true;
                this.player.party = this.pokemon;
                this.player.waitForSwitch = false;
                break;
            }
        }
    }

    moveHandler(e){
        // find which move was selected
        // in order of moves: top left, top right, bottom left, bottom right
        let move;
        if (e.screenX >= positionData['moveXStart'] && e.screenY >= positionData['moveClickY'] && e.screenX <= positionData['moveXStart'] + positionData['moveWidth'] && e.screenY <= positionData['moveClickY'] + positionData['moveHeight']){
            move = this.pokemonMoves[Object.keys(this.pokemonMoves)[0]];
        } else if (e.screenX >= positionData['moveXStart'] + positionData['moveWidth'] + 10 && e.screenY >= positionData['moveClickY'] && e.screenX <= positionData['moveXStart'] + positionData['moveWidth'] * 2 + 10 && e.screenY <= positionData['moveClickY'] + positionData['moveHeight']){
            move = this.pokemonMoves[Object.keys(this.pokemonMoves)[1]]
        } else if (e.screenX >= positionData['moveXStart'] && e.screenY >= positionData['moveClickY'] + positionData['moveHeight'] + 10 && e.screenX <= positionData['moveXStart'] + positionData['moveWidth'] && e.screenY <= positionData['moveClickY'] + positionData['moveHeight'] + positionData['moveHeight'] * 2 + 10){
            move = this.pokemonMoves[Object.keys(this.pokemonMoves)[2]]
        } else if (e.screenX >= positionData['moveXStart'] + positionData['moveWidth'] + 10 && e.screenY >= positionData['moveClickY'] + positionData['moveHeight'] + 10 && e.screenX <= positionData['moveXStart'] + positionData['moveWidth'] * 2 + 10 && e.screenY <= positionData['moveClickY'] + positionData['moveHeight'] + positionData['moveHeight'] * 2 + 10){
            move = this.pokemonMoves[Object.keys(this.pokemonMoves)[3]]
        };
        this.player.move = move;
    }
}