// import functions and grab DOM elements
import { findByPokemonName } from './utils.js';
import { generateThreePokemon } from './data-utils.js';
import { catchPokemon } from './local-storage-utils.js';

// initialize state
const button = document.querySelector('.pokeball-button');

function aWildPokemonAppears() {
    // generate three pokemon
    let wildOptions = generateThreePokemon(); // generates [poke1, poke2, poke3];
    // DOM elements
    const radio1 = document.getElementById('poke1-radio');
    const radio2 = document.getElementById('poke2-radio');
    const radio3 = document.getElementById('poke3-radio');

    const image1 = document.getElementById('poke1-img');
    const image2 = document.getElementById('poke2-img');
    const image3 = document.getElementById('poke3-img');
    
    // assign pokemon to poke1-radio
    radio1.value = wildOptions[0].pokemon;
    radio2.value = wildOptions[1].pokemon;
    radio3.value = wildOptions[2].pokemon;
    
    // display image to poke1-img
    image1.src = wildOptions[0].url_image;
    image2.src = wildOptions[1].url_image;
    image3.src = wildOptions[2].url_image;
}

// set event listeners to update state and DOM

aWildPokemonAppears();

button.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input:checked');

    const chosenPokemon = findByPokemonName(selectedRadio.value);

    catchPokemon(chosenPokemon);
    aWildPokemonAppears();
});
