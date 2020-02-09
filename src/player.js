import pokemonData from '../data/pokemonData';
import statsAndMovesData from '../data/statsAndMovesData';

export default class Player {
  constructor(){
      this.party = this.randomPokemon();
      this.switched = false;
      this.move = false;
      this.currentPokemonStats = {};
      for (let i=0; i < 6; i++){
        this.currentPokemonStats[this.party[i]] = Object.assign({}, statsAndMovesData[this.party[i]]);
        this.currentPokemonStats[this.party[i]]['hp'] = 141 + 2 * this.currentPokemonStats[this.party[i]]['hp']
      };
      this.waitForSwitch = false;
  }

  randomPokemon(){
    let party = [];
    const pokemonArray = Object.keys(pokemonData);
    while (party.length != 6) {
      let pokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
      if (pokemon.slice(0,5) === 'front'){
        pokemon = pokemon.slice(5);
      }
      else if (pokemon.slice(0,4) === 'back'){
        pokemon = pokemon.slice(4);
      };
      if (!party.includes(pokemon)) party.push(pokemon);
    };
    party[0] = 'Mewtwo';
    party[1] = 'Magikarp';
    return party;
  }
}