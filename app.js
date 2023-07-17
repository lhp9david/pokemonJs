let getButton = document.querySelector('.get');
let image = document.querySelector('.image');
let pokeName = document.querySelector('.name');
let type = document.querySelector('.type');
let id = document.querySelector('.id');
let evolution = document.querySelector('.next');
let imageEvo = document.querySelector('.imageEvo');



let getPokemon = async () => {
   //entre 1 et 151
    let random = Math.floor(Math.random() * 151) + 1;
    let url = `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${random}`;

    let data = await fetch(url);
    let response = await data.json();
    console.log(response);

    image.src = response.sprites.shiny;
    pokeName.innerHTML = response.name.fr;
    type.innerHTML = response.types[0].name;
    id.innerHTML = response.pokedexId;
    if (response.evolution.next === null) {
        evolution.innerHTML = 'Aucune évolution';
        imageEvo.src = '../img/annuler.png';
    } else {
        evolution.innerHTML = response.evolution.next[0].name;
        let url2 = `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${response.evolution.next[0].pokedexId}`;
        let data2 = await fetch(url2);
        let response2 = await data2.json();
        imageEvo.src = response2.sprites.shiny;
        
    }
        
}

getButton.addEventListener('click', getPokemon);

getPokemon();