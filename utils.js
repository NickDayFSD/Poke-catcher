import pokeData from './Pokemon.js';

export function findById(array, id) {
    return array.find(item => id === item.id);
}

export function findByPokemonName(name) {
    return pokeData.find(poke => name === poke.pokemon);
}

export function createPokedexListing(pokedex) {
    const li = document.createElement('li');
    li.classList.add('pokemon');

    const image = document.createElement('img');
    image.src = pokedex.image;

    const pName = document.createElement('p');
    pName.classList.add('name');
    pName.textContent = pokedex.id;

    const pCap = document.createElement('p');
    pCap.classList.add('captured');
    pCap.textContent = pokedex.captured;

    const pSeen = document.createElement('p');
    pSeen.classList.add('spotted');
    pSeen.textContent = pokedex.encountered;

    li.append(image, pName, pCap, pSeen);

    return li;
}