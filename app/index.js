import PokemonBattle from './game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('board');

    // screen clicks won't work unless user is on normal zoom
    document.body.style.zoom = 1.0
    var scale = 'scale(1)';
    document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
    document.body.style.msTransform =   scale;       // IE 9
    document.body.style.transform = scale;     // General
    
    new PokemonBattle(canvas);
});