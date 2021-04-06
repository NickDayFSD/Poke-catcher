// import functions to retrieve local storage
import { getPokedex } from '../local-storage-utils.js';

// import data
import pokeData from '../Pokemon.js';

// display results like shopping cart
const pokedex = getPokedex();
console.log(pokedex);