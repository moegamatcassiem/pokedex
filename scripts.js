let base_URL = "https://pokeapi.co/api/v2/pokemon/";

function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let pokemon = data.results;
      let container = document.querySelector(".pokemon-list");
      container.innerHTML = "";
      pokemon.forEach((btn) => {
        container.innerHTML += `<button onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
          container.innerHTML += `<br><br><button onclick="getPokemonList('${data.previous}')">Previous<br><i class="fas fa-arrow-left"></i></button>`;
      container.innerHTML += `<button onclick="getPokemonList('${data.next}')">Next<br><i class="fas fa-arrow-right"></i></button>`;
    });
}

getPokemonList(base_URL);

function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".pokemon-pic").innerHTML = `
    <img src="${data.sprites.front_default} ">
    `;
    document.querySelector(".pokemon-pic2").innerHTML = `
    <img src="${data.sprites.back_default} ">
    `;
    document.querySelector(".pokemon-name").innerHTML = `${data.name}`;
    document.querySelector(".height").innerHTML = `<p>Height: ${data.height}</p>`;
    document.querySelector(".weight").innerHTML = `<p>Weight: ${data.weight}</p>`;
    document.querySelector(".poketype").innerHTML = `<p>Type: ${data.types[0].type.name}`;
    });
}