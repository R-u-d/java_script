const container = document.getElementById("pokemon-container");

function getPokemon(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json());
}

function createPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.className = "bg-white rounded-lg shadow p-4 text-center";

  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const type = pokemon.types[0].type.name;
  const image = pokemon.sprites.front_default;

  card.innerHTML = `
    <img src="${image}" alt="${name}" class="mx-auto w-24 h-24" />
    <h2 class="text-lg font-bold mt-2">${name}</h2>
    <p class="text-gray-600 capitalize">${type}</p>
  `;

  container.appendChild(card);
}

async function loadPokemons() {
  for (let i = 1; i <= 150; i++) {
    const pokemon = await getPokemon(i);
    createPokemonCard(pokemon);
  }
}

loadPokemons();
