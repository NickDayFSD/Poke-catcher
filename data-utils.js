import pokeData from './data.js'

// generate three pokemon
export function generateThreePokemon() {
    let randomNumber1 = getRandomIndex;
    let randomNumber2 = getRandomIndex;
    let randomNumber3 = getRandomIndex;

    while (
        randomNumber1 === randomNumber2 || 
        randomNumber2 === randomNumber3 || 
        randomNumber3 === randomNumber1) {
        randomNumber1 = getRandomIndex;
        randomNumber2 = getRandomIndex;
        randomNumber3 = getRandomIndex;
    }
}

function getRandomIndex() {
    return Math.ceil(Math.random() * pokeData.length);
}