import statsAndMovesData from '../data/statsAndMovesData';
import Pokemon from './pokemon';

export default class Player {
  constructor(name="test"){
    this.name = name.slice(0,7);
    this.party = this.randomPokemon();
    this.switched = false;
    this.move = null;
    this.faint = false;
  }

  randomPokemon(){
    let party = [];
    let currentPokemon = [];
    const pokemonArray = Object.keys(statsAndMovesData);
    while (party.length != 6) {
      let pokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
      if (!currentPokemon.includes(pokemon)) {
        currentPokemon.push(pokemon);
        party.push(new Pokemon(pokemon));
      }
    };
    party[0] = new Pokemon('Pidgeot');
    // party[0].currentStats['hp'] = 1;
    // party[1] = new Pokemon('Magikarp');
    // party[1].currentStats['hp'] = 1;
    return party;
  }
}