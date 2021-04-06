// import functions to retrieve local storage
import { getPokedex } from '../local-storage-utils.js';
import { createPokedexListing } from '../utils.js';

// display results like shopping cart
const pokedex = getPokedex();
console.log(pokedex);

const ulCap = document.querySelector('.pokemon-cap');
const ulSpot = document.querySelector('.pokemon-spot');

for (let count of pokedex) {
    // if statement to separate captured from only spotted
    const li = createPokedexListing(count);
    console.log(li);
    if (count.captured) {
        ulCap.append(li);
    }
    ulSpot.append(li);
}