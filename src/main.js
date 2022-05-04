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

const pathName = window.location.pathname
if(pathName=="/src/spells.html"){
  const cardSpells= createSpell();
  const cardContainer2 = document.getElementById('cardContainer2');
  cardContainer2.appendChild(cardSpells)

}
// characters.forEach(function (character) {
//   const cardContainer = document.getElementById('cardContainer');

//   const card = document.createElement('div');
//   card.classList.add('cardDiv');

//   const photo = document.createElement('img');
//   photo.classList.add('avatar');

//   const name = document.createElement('h2');
//   name.classList.add('nameDiv');

//   const house = document.createElement('p');
//   house.classList.add('houseDiv');

//   const birth = document.createElement('p');
//   birth.classList.add('birthDiv');

//   const wand = document.createElement('p');
//   wand.classList.add('wandDiv');

//   const patronus = document.createElement('p');
//   patronus.classList.add('patronusDiv');

//   const bookFeatured =document.createElement('p');
//   bookFeatured.classList.add('bookFeaturedDiv');

//   photo.textContent = photo.src = 'imagenes/Mago.png'
//   card.appendChild(photo);

//   name.textContent = character.name;
//   card.appendChild(name);

//   house.textContent = 'House: ' + character.house;
//   card.appendChild(house);

//   birth.textContent = 'Birth: ' + character.birth;
//   card.appendChild(birth);

//   wand.textContent = 'Wand: ' + character.wand;
//   card.appendChild(wand);

//   patronus.textContent = 'Patronus: ' + character.patronus;
//   card.appendChild(patronus);

//   bookFeatured.textContent = 'Book feature: '+ character.books_featured_in;
//   card.appendChild(bookFeatured);

//   cardContainer.appendChild(card);

// });


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
             <p class='bookFeaturedDiv'>Book feature: ${character.books_featured_in}</p>
        </div>`
  });
});


function createSpell(){
  const cardContainer2 = document.createElement('div');
spells.forEach(function (spell) {
  //const cardContainer2 = document.getElementById('cardContainer2');

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

  other_name.textContent = 'Other Name: ' + spell.other_name;
  card2.appendChild(other_name);

  pronunciation.textContent = 'Pronunciation: ' + spell.pronunciation;
  card2.appendChild(pronunciation);

  type.textContent = 'Type: ' + spell.spell_type;
  card2.appendChild(type);

  description.textContent = 'Description: ' + spell.description;
  card2.appendChild(description);

  cardContainer2.appendChild(card2);

});
return (cardContainer2)
}



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


// potions.forEach(function (potion) {
//   const cardContainer3 = document.getElementById('cardContainer3');
  
//   const card3 = document.createElement('div');
//   card3.classList.add('cardDiv3');

//   const name = document.createElement('h');
//   name.classList.add('nameDiv');
  
//   const description = document.createElement('p');
//   description.classList.add('descriptionDiv');
  
//   name.textContent = spell.name;
//   card2.appendChild(name);
  
//   description.textContent = 'Description: ' + spell.description;
//   card2.appendChild(description);
  
//   cardContainer3.appendChild(card3);
  
//   });
  
// const potionsSelect = document.getElementById('potionsS')

// potionsSelect.addEventListener("change", function () {
  
//     const type = spellsSelect.options[spellsSelect.selectedIndex].text;
//     const resultSpells = filterSpells(spells, type);
//   console.log(filterSpells(spells, type));

// const cardContainer2 = document.getElementById('cardContainer2');
// cardContainer2.innerHTML = '';
  
// resultSpells.forEach(function (spell) {
//       cardContainer2.innerHTML +=
//         `<div class='cardDiv2'>
//             <h2 class='nameDiv'> ${spell.name}</h2> 
//                <p class='othernameDiv'> Name: ${spell.other_name}</p>
//                <p class='pronunciationDiv'> Pronunciation: ${spell.pronunciation}</p>
//                <p class='spelltypeDiv'> Type: ${spell.spell_type}</p>
//                <p class='descriptionDiv'>Description: ${spell.description}</p>
//           </div>`
//     });
//   });

// books.forEach(function (book) {
//   const cardContainer2 = document.getElementById('cardContainer2');
      
//   const card2 = document.createElement('div');
//   card2.classList.add('cardDiv2');
    
//   const name = document.createElement('h');
//   name.classList.add('nameDiv');
      
//   const other_name = document.createElement('p');
//   other_name.classList.add('other_nameDiv');
      
//   const pronunciation = document.createElement('p');
//   pronunciation.classList.add('pronunciationDiv');
      
//   const type = document.createElement('p');
//   type.classList.add('typeDiv');
      
//   name.textContent = spell.name;
//   card2.appendChild(name);
      
//   other_name.textContent = 'Other Name: ' + spell.other_name;
//   card2.appendChild(other_name);
      
//   pronunciation.textContent = 'Pronunciation: ' + spell.pronunciation;
//   card2.appendChild(pronunciation);
      
//   type.textContent = 'Type: ' + spell.spell_type;
//   card2.appendChild(type);
      
//   cardContainer4.appendChild(card4);
      
//   });
      
      
// const booksSelect = document.getElementById('booksS')

// booksSelect.addEventListener("change", function () {
  
//     const type = spellsSelect.options[spellsSelect.selectedIndex].text;
//     const resultSpells = filterSpells(spells, type);
//   console.log(filterSpells(spells, type));

// const cardContainer2 = document.getElementById('cardContainer2');
// cardContainer2.innerHTML = '';
  
// resultSpells.forEach(function (spell) {
//       cardContainer2.innerHTML +=
//         `<div class='cardDiv2'>
//             <h2 class='nameDiv'> ${spell.name}</h2> 
//                <p class='othernameDiv'> Name: ${spell.other_name}</p>
//                <p class='pronunciationDiv'> Pronunciation: ${spell.pronunciation}</p>
//                <p class='spelltypeDiv'> Type: ${spell.spell_type}</p>
//                <p class='descriptionDiv'>Description: ${spell.description}</p>
//           </div>`
//     });
//   });

    