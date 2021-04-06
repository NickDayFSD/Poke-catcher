// import functions to retrieve local storage
import { getPokedex } from '../local-storage-utils.js';
import { createPokedexListing } from '../utils.js';

// display results like shopping cart
const pokedex = getPokedex();

const ulCap = document.querySelector('.pokemon-cap');
const ulSpot = document.querySelector('.pokemon-spot');

for (let count of pokedex) {
    // if statement to separate captured from only spotted
    const li = createPokedexListing(count);

    if (count.captured) {
        ulCap.append(li);
    } else {
        ulSpot.append(li);
    }
}

const resetButton = document.getElementById('restart-button');

resetButton.addEventListener('click', () => {
    alert('Your Pokemon have been released into the wild.');
    localStorage.clear();
    window.location.href = '../index.html';
});
