import PokemonBattle from './game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('board');
    new PokemonBattle(canvas);
});