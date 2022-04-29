import data from './data/harrypotter/harry.js';

import { filterHouse, filterSpells } from './data.js';

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

const spellsButton = document.getElementById('spellsB');
if (spellsButton) {
  spellsButton.addEventListener("click", function () {
    window.location.href = "spells.html";
  });
}

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

spells.forEach(function (spell) {
  const cardContainer2 = document.getElementById('cardContainer2');

  const card2 = document.createElement('div');
  card2.classList.add('cardDiv2');

  const name = document.createElement('h');
  name.classList.add('nameDiv');

  const other_name = document.createElement('p');
  other_name.classList.add('other_nameDiv');

  const pronunciation = document.createElement('p');
  pronunciation.classList.add('pronunciationDiv');

  const type = document.createElement('p');
  type.classList.add('typeDiv');

  const description = document.createElement('p');
  description.classList.add('descriptionDiv');

  const mention = document.createElement('p');
  mention.classList.add('mentionDiv');

  const etymology = document.createElement('p');
  etymology.classList.add('etymologyDiv');

  name.textContent = spell.name;
  card2.appendChild(name);

  other_name.textContent = spell.other_name;
  card2.appendChild(other_name);

  pronunciation.textContent = spell.pronunciation;
  card2.appendChild(pronunciation);

  type.textContent = spell.spell_type;
  card2.appendChild(type);

  description.textContent = spell.description;
  card2.appendChild(description);

  cardContainer2.appendChild(card2);

});


const spellsSelect = document.getElementById('spellsS')
spellsSelect.addEventListener("change", function () {

  const type = typeSelect.options[typeSelect.selectedIndex].text;

  const resultSpells = filterSpells(spells, spell_type);
console.log(filterSpells(spells, type));
const cardContainer2 = document.getElementById('cardContainer2');
cardContainer2.innerHTML = '';

  resultSpells.forEach(function (spell) {
    cardContainer2.innerHTML +=
      `<div class='cardDiv2'>
          <h2 class='nameDiv'> ${spell.name}</h2> 
             <p class='othernameDiv'> Name: ${spell.other_name}</p>
             <p class='pronunciationDiv'> Pronunciation: ${spell.pronunciation}</p>
             <p class='spelltypeDiv'> Type: ${spell.spell_type}</p>
             <p class='descriptionDiv'>Description: ${spell.description}</p>
        </div>`
  });
});



