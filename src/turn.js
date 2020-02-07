import positionData from '../data/positionData';
import stylingData from '../data/stylingData';
import typeColors from '../data/typeColors';
import statsAndMovesData from '../data/statsAndMovesData';

export default class Turn {
    constructor(canvas, player){
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.player = player;
        console.log(player.party);
        this.pokemon = player.party;
        this.xStart = positionData['pokemonXStart'] + positionData['pokemonXMargin'] + positionData['screenX'];
        this.yStart = positionData['pokemonYStart'] + positionData['screenY'];
        this.movesDisplay();
        this.switchDisplay();
    }

    movesDisplay(){
        this.ctx.clearRect(positionData['turnDisplayWidth'], positionData['moveYStart'], this.dimensions['width'], positionData['moveHeight'] + 50)
        const pokemonMoves = statsAndMovesData[this.pokemon[0]]['moves'];
        for (let i=0; i < Object.keys(pokemonMoves).length; i++){
            let typeColor = typeColors[pokemonMoves[Object.keys(pokemonMoves)[i]]['type']]
            let x = i % 2 === 0 ? positionData['turnDisplayWidth'] + 40 : positionData['turnDisplayWidth'] + 50 + positionData['moveWidth'];
            let y = i < 2 ? positionData['moveYStart'] : positionData['moveYStart'] + positionData['moveHeight'] + 10;
            this.ctx.fillStyle = typeColor;
            this.ctx.fillRect(x, y, positionData['moveWidth'], positionData['moveHeight']);
            this.ctx.fillStyle = typeColor === "black" ? "black" : "white";
            this.ctx.font = "bold 16px Verdana";
            this.ctx.textAlign = "center";
            this.ctx.fillText(Object.keys(pokemonMoves)[i], x + positionData['moveWidth'] / 2, y + positionData['moveHeight'] / 2 + 5);
        }
    }

    switchDisplay(){
        this.ctx.textAlign = "start";
        this.ctx.fillStyle = 'black';
        this.ctx.clearRect(positionData['pokemonXStart'], positionData['pokemonYStart'], positionData['pokemonWidth'] * 3 + positionData['pokemonXMargin'] * 2, positionData['pokemonHeight'] * 3)
        const x = [
            positionData['pokemonXStart'], 
            positionData['pokemonXStart'] + positionData['pokemonXStart2'], 
            positionData['pokemonXStart'] + positionData['pokemonXStart2'] * 2, 
            positionData['pokemonXStart'], 
            positionData['pokemonXStart'] + positionData['pokemonXStart2'], 
            positionData['pokemonXStart'] + positionData['pokemonXStart2'] * 2
        ];
        for (let counter = 0; counter < 6; counter++){
            const y = counter < 3 ? positionData['pokemonYStart'] : positionData['pokemonYStart'] + positionData['pokemonYStart2']
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
            };
        }
    }

    clickHandler(e){
        // this is the area with switch pokemon options
        if (e.screenX >= this.xStart && e.screenY >= this.yStart && e.screenX <= this.xStart + positionData['pokemonXStart2'] * 2 + positionData['pokemonWidth'] && e.screenY <= this.yStart + positionData['pokemonYStart2'] * 2 + positionData['pokemonHeight']){
            this.switchHandler(e);
        }
    }

    switchHandler(e){
        // top middle pokemon
        //debugger;
        if (e.screenX >=  this.xStart + positionData['pokemonXStart2'] && e.screenY >= this.yStart && e.screenX <= this.xStart + positionData['pokemonXStart2'] + positionData['pokemonWidth'] && e.screenY <= this.yStart + positionData['pokemonHeight']){
            this.pokemon.unshift(this.pokemon.splice(1,1)[0]);
        } else if (e.screenX >=  this.xStart + positionData['pokemonXStart2'] * 2 && e.screenY >= this.yStart && e.screenX <= this.xStart + positionData['pokemonXStart2'] * 2 + positionData['pokemonWidth'] && e.screenY <= this.yStart + positionData['pokemonHeight']){
            this.pokemon.unshift(this.pokemon.splice(2,1)[0]);
        } else if (e.screenX >=  this.xStart && e.screenY >= this.yStart + positionData['pokemonYStart2'] && e.screenX <= this.xStart + positionData['pokemonWidth'] && e.screenY <= this.yStart + positionData['pokemonYStart2'] + positionData['pokemonHeight']){
            this.pokemon.unshift(this.pokemon.splice(3,1)[0]);
        } else if (e.screenX >=  this.xStart + positionData['pokemonXStart2'] && e.screenY >= this.yStart + positionData['pokemonYStart2'] && e.screenX <= this.xStart + positionData['pokemonXStart2'] + positionData['pokemonWidth'] && e.screenY <= this.yStart + positionData['pokemonYStart2'] + positionData['pokemonHeight']){
            this.pokemon.unshift(this.pokemon.splice(4,1)[0]);
        } else if (e.screenX >=  this.xStart + positionData['pokemonXStart2'] * 2 && e.screenY >= this.yStart + positionData['pokemonYStart2'] && e.screenX <= this.xStart + positionData['pokemonXStart2'] * 2 + positionData['pokemonWidth'] && e.screenY <= this.yStart + positionData['pokemonYStart2'] + positionData['pokemonHeight']){
            this.pokemon.unshift(this.pokemon.splice(5,1)[0]);
        }
        //debugger;
        this.player.party = this.pokemon;
        this.switchDisplay();
    }

}