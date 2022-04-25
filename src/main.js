//import characters from './data.js';

//import harry from './data/harrypotter/harry.js';
// // import data from './data/rickandmorty/rickandmorty.js';


const alohomoraButton = document.getElementById('alohomoraB');

if (alohomoraButton) {
    alohomoraButton.addEventListener("click", function () {
      window.location.href = "menu.html";
    });
  }

const charactersButton = document.getElementById('charactersB');
if (charactersButton) {
    charactersButton.addEventListener("click", function () {
      window.location.href = "characters.html";
    });
  }

import data from './data/harrypotter/harry.js';
  

  let characters = data.characters;
  
  let spells = data.spells;
  
  let potions = data.potions;
  
  let books = data.books;
  
  let funFacts = data.funFacts;

  
  characters.forEach(function(character){
  const cardContainer = document.getElementById('cardContainer');
  
  const card = document.createElement('div');
  card.classList.add('cardDiv');
  
  const name = document.createElement('h2');
  name.classList.add('nameDiv');
  
  const house = document.createElement('p');
  house.classList.add('houseDiv');
  
  const birth = document.createElement('p');
  birth.classList.add('birthDiv');
  
  const wand = document.createElement('p');
  wand.classList.add('wandDiv');
  
  const patronus =document.createElement('p');
  patronus.classList.add('patronusDiv');
  
    name.textContent = character.name;
    card.appendChild (name);
    
    house.textContent = character.house;
    card.appendChild (house);
  
    birth.textContent = character.birth;
    card.appendChild (birth);
  
    wand.textContent = character.wand;
    card.appendChild (wand);
  
    patronus.textContent = character.patronus;
    card.appendChild (patronus);
  
    cardContainer.appendChild (card);
    
  });
 
  import gryffindor from './data.js';
  let result = gryffindor();
  console.log(result);

