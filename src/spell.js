import data from './data/harrypotter/harry.js';
import {filterSpells } from './data.js';

let spells = data.spells;

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
  
    const type = spellsSelect.options[spellsSelect.selectedIndex].text;
    const resultSpells = filterSpells(spells, type);
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