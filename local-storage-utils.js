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
    if (matchingPokedex) {
        matchingPokedex.encountered++;
    } else {
        const newPokedexEntry = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };

        pokedex.push(newPokedexEntry);
    }

    setPokedex(pokedex);

    return pokedex;
}

// capture Pokemon
export function catchPokemon(pokemon) {
    // take pokemon
    // get pokedex
    const pokedex = getPokedex();
    // increment capture on said pokemon
    const match = findById(pokedex, pokemon.pokemon);

    match.captured++;

    setPokedex(pokedex);
}
