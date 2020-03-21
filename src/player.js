import statsAndMovesData from '../data/statsAndMovesData';
import Pokemon from './pokemon';

export default class Player {
  constructor(name="test"){
    this.name = name.slice(0,7); // names longer than 7 characters don't fit
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
      if (!currentPokemon.includes(pokemon)) { // don't allow duplicate pokemon in the party
        currentPokemon.push(pokemon);
        party.push(new Pokemon(pokemon));
      }
    };
    return party;
  }
}