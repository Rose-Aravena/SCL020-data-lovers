//import characters from './data.js';

//import harry from './data/harrypotter/harry.js';
// // import data from './data/rickandmorty/rickandmorty.js';
import data from './data/harrypotter/harry.js';

import { filterHouse } from './data.js';

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
// console.log(filterHouse(data.characters, 'Slytherin'));  

let characters = data.characters;

let spells = data.spells;

let potions = data.potions;

let books = data.books;

let funFacts = data.funFacts;

characters.forEach(function (character) {
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

  const patronus = document.createElement('p');
  patronus.classList.add('patronusDiv');

  name.textContent = character.name;
  card.appendChild(name);

  house.textContent = character.house;
  card.appendChild(house);

  birth.textContent = character.birth;
  card.appendChild(birth);

  wand.textContent = character.wand;
  card.appendChild(wand);

  patronus.textContent = character.patronus;
  card.appendChild(patronus);

  cardContainer.appendChild(card);

});


const houseSelect = document.getElementById('houseS')
houseSelect.addEventListener("change", function () {
  // let houseSelect = document.getElementById('houseS').value;
  const house = houseSelect.options[houseSelect.selectedIndex].text;
  //console.log(filterHouse(characters, house));
  const resulHouse = filterHouse(characters, house);

const cardContainer = document.getElementById('cardContainer');
cardContainer.innerHTML = '';

  resulHouse.forEach(function (character) {
    cardContainer.innerHTML +=
      `<div class='cardDiv'>
          <h2 class='nameDiv'> ${character.name}</h2> 
             <p class='houseDiv'> House: ${character.house}</p>
             <p class='birthDiv'> Birth: ${character.birth}</p>
             <p class='wandDiv'> Wand: ${character.wand}</p>
             <p class='patronusDiv'>Patronus: ${character.patronus}</p>
        </div>`
  });
});





