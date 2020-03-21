import statsAndMovesData from '../data/statsAndMovesData';

export default class Pokemon {
    constructor(name){
        this.name = name;
        this.currentStats = Object.assign({}, statsAndMovesData[name]);
        this.currentStats['hp'] = 141 + 2 * this.currentStats['hp']; // the hp stat is different than the amount of hp they have
        this.fullHealth = this.currentStats['hp'];
        this.statChanges = {
            attack: 0,
            defense: 0,
            spAtk: 0,
            spDef: 0,
            speed: 0,
        }
    }

    resetStats(){ // stats are reset when a pokemon switches out
        this.statChanges = {
            attack: 0,
            defense: 0,
            spAtk: 0,
            spDef: 0,
            speed: 0,
        }
        let hp = this.currentStats['hp'];
        this.currentStats = Object.assign({}, statsAndMovesData[this.name]);
        this.currentStats['hp'] = hp;
    }
}