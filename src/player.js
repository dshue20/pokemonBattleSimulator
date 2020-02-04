import pokemonData from '../data/pokemonData';

export default class Player {
    constructor(){
        this.party = this.randomPokemon();
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
          //if (!party.includes(pokemon)) party.push(pokemon);
          party.push(pokemon);
        };
        return party;
      }
}