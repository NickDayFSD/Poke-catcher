## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps

### HTML setup
1) Radio buttons for pokemon

<label>
    <input type="radio" name="poke" />
    <img />
</label>

input {
    display: none;
}
input:checked + img {
    border: solid 2px color;
}

2) button to catch the pokemon


### State
- encounters, caught for each pokemon
    - const pokedex = [] //shopping cart
- let captures = 0

### Events
- onClick,
    - increment totalPokemon
    - figure out which pokemon is selected
    - grab pokedex from local storage
    - increment captured property for this pokemon
    - if totalPokemon === 10, redirect

- onLoad
    - generate three unique pokemon
    - add them as encountered to the pokedex

### Functions
 - generateThreePokemon
    - start with raw array of pokemon data
    - randomly select three unique array indexes with Math.random
        - while (anyOfOurPokemonAreRepeats) {
            generateThreeNewNumbers()
        }
    - use three indexes to get three pokemon
    - increment the encountered property on all pokemon
        - ask: is it in the pokedex yet?
        - if not, {pokemon: name, captured: 0, encountered: 1}
    - we'll put them in the DOM

 - capturePokemon(selectedPokemon)
    - grab pokedex from local storage

- local storage functions
    - getPokedex
    - encounterPokemon
    - capturePokemon