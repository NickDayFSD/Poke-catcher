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

// making the chart!
// create variables for 'labels' and 'data'
// data can be times seen or times captured
const names = [];
const captured = [];
const encountered = [];

for (let pokemon of pokedex) {
    names.push(pokemon.id);
    captured.push(pokemon.captured);
    encountered.push(pokemon.encountered);
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Pokemon Captured',
                data: captured,
                backgroundColor: 'gold',
                borderColor: 'charcoal',
                borderWidth: 1
            },
            {
                label: 'Pokemon Encountered',
                data: encountered,
                backgroundColor: 'grey',
                borderColor: 'charcoal',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const resetButton = document.getElementById('restart-button');

resetButton.addEventListener('click', () => {
    alert('Your Pokemon have been released into the wild.');
    localStorage.clear();
    window.location.href = '../index.html';
});
