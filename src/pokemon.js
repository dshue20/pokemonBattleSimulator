import statsAndMovesData from '../data/statsAndMovesData';

export default class Pokemon {
    constructor(name){
        this.name = name;
        this.currentStats = Object.assign({}, statsAndMovesData[name]);
        this.currentStats['hp'] = 141 + 2 * this.currentStats['hp'];
        this.fullHealth = this.currentStats['hp'];
    }
}