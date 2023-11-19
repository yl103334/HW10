document.getElementById('generateButton').addEventListener('click', () => {
    generateRandomPokemon(1);
    generateRandomPokemon(2);
});

async function generateRandomPokemon(pokemonNumber) {
    const pokemonId = Math.floor(Math.random() * 898) + 1; // There are currently 898 Pokémon
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemonData = await response.json();

    displayPokemon(pokemonData, pokemonNumber);
}

function displayPokemon(pokemonData, pokemonNumber) {
    const pokemonDiv = document.getElementById(`pokemon${pokemonNumber}`);
    pokemonDiv.innerHTML = `
        <h3>${pokemonData.name}</h3>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <details>
            <summary>Abilities</summary>
            <ul>
                ${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
            </ul>
        </details>
    `;
}
