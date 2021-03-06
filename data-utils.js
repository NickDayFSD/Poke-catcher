import { encounterPokemon } from './local-storage-utils.js';
import pokeData from './Pokemon.js';

// generate three pokemon
export function generateThreePokemon() {
    let randomNumber1 = getRandomIndex();
    let randomNumber2 = getRandomIndex();
    let randomNumber3 = getRandomIndex();

    while (
        randomNumber1 === randomNumber2 || 
        randomNumber2 === randomNumber3 || 
        randomNumber3 === randomNumber1) {
        randomNumber1 = getRandomIndex();
        randomNumber2 = getRandomIndex();
        randomNumber3 = getRandomIndex();
    }
    console.log(randomNumber1, randomNumber2, randomNumber3);

    const poke1 = pokeData[randomNumber1];
    const poke2 = pokeData[randomNumber2];
    const poke3 = pokeData[randomNumber3];

    encounterPokemon(poke1);
    encounterPokemon(poke2);
    encounterPokemon(poke3);

    return [poke1, poke2, poke3];
}

function getRandomIndex() {
    return Math.floor(Math.random() * pokeData.length);
}
