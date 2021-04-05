import { findById, findByPokemonName} from './utils.js';

// get pokedex
const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const stringPokedex = localStorage.getItem(POKEDEX);
    const parsePokedex = JSON.parse(stringPokedex);

    if (parsePokedex) {
        return parsePokedex;
    } else {
        return [];
    }
}

export function setPokedex(parsePokedex) {
    const stringPokedex = JSON.stringify(parsePokedex);
    localStorage.setItem(POKEDEX, stringPokedex);
}

// encounter Pokemon
export function encounterPokemon(pokemon) {
    // this should take in a pokemon
    // get the pokedex
    const pokedex = getPokedex();
    // is this pokemon in the pokedex?
    const matchingPokedex = findById(pokedex, pokemon.pokemon);
    // if yes, increment encounter number
    // else initialize new pokedex object
}

// capture Pokemon