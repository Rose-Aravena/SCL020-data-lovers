import data from './data/harrypotter/harry.js';

import { filterHouse, filterSpells,} from './data.js';

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
if(pathName=="/src/characters.html"){
  const cardCharacters= createCharacter();
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.appendChild(cardCharacters)
}
if (pathName=="/src/spells.html"){
  const cardSpells= createSpell();
  const cardContainer2 = document.getElementById('cardContainer2');
  cardContainer2.appendChild(cardSpells)
}
if (pathName=="/src/potions.html"){
  const cardPotions= createPotion();
  const cardContainer3 = document.getElementById('cardContainer3');
  cardContainer3.appendChild(cardPotions)
}
if (pathName=="/src/books.html"){
  const cardBooks= createBook();
  const cardContainer4 = document.getElementById('cardContainer4');
  cardContainer4.appendChild(cardBooks)
}



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
        <div class='photo'>
          <img class='avatar' src='imagenes/Mago.png'> </img>
        </div>
        <div class='textDiv'>
          <h2 class='nameDiv'> ${character.name}</h2> 
          <p class='birthDiv'> Birth: ${character.birth}</p>
          <p class='ancestryDiv'> Ancestry: ${character.ancestry}</p>
          <p class='houseDiv'> House: ${character.house}</p>
          <p class='wandDiv'> Wand: ${character.wand}</p>
          <p class='patronusDiv'>Patronus: ${character.patronus}</p>
          <p class='bookFeaturedDiv'>Book feature: ${character.books_featured_in}</p>
          <p class='deathDiv'>Death: ${character.death}</p>
        </div>
      </div>`
  });
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


function createCharacter(){
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');
  characters.forEach(function (character) {

    const card = document.createElement('div');
    card.classList.add('cardDiv');

    const cardPhoto = document.createElement('div');
    cardPhoto.classList.add('photo');
 
    const text = document.createElement('div');
    text.classList.add('textDiv')

    const photo = document.createElement('img');
    photo.classList.add('avatar');

    const name = document.createElement('h2');
    name.classList.add('nameDiv');

    const birth = document.createElement('p');
    birth.classList.add('birthDiv');

    const ancestry = document.createElement('p');
    ancestry.classList.add('ancestryDiv');

    const house = document.createElement('p');
    house.classList.add('houseDiv');

    const wand = document.createElement('p');
    wand.classList.add('wandDiv');

    const patronus = document.createElement('p');
    patronus.classList.add('patronusDiv');

    const bookFeatured =document.createElement('p');
    bookFeatured.classList.add('bookFeaturedDiv');

    const death =document.createElement('p');
    death.classList.add('deathDiv');

    photo.textContent = photo.src = 'imagenes/Mago.png'
    cardPhoto.appendChild(photo);
    card.appendChild(cardPhoto);

    name.textContent = character.name;
    text.appendChild(name);

    birth.textContent = 'Birth: ' + character.birth;
    text.appendChild(birth);

    ancestry.textContent = 'Ancestry: ' + character.ancestry;
    text.appendChild(ancestry);
    
    house.textContent = 'House: ' + character.house;
    text.appendChild(house);

    wand.textContent = 'Wand: ' + character.wand;
    text.appendChild(wand);

    patronus.textContent = 'Patronus: ' + character.patronus;
    text.appendChild(patronus);

    bookFeatured.textContent = 'Book feature: '+ character.books_featured_in;
    text.appendChild(bookFeatured);

    death.textContent = 'Death: '+ character.death;
    text.appendChild(death);

    card.appendChild(cardPhoto);
    card.appendChild(text);
    cardContainer.appendChild(card);
    });
return (cardContainer)
}

function createSpell(){
  const cardContainer2 = document.createElement('div');
  cardContainer2.classList.add('card2');
  spells.forEach(function (spell) {
  //const cardContainer2 = document.getElementById('cardContainer2');

  const card2 = document.createElement('div');
  card2.classList.add('cardDiv2');

  const name = document.createElement('h2');
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

function createPotion(){
const cardContainer3 = document.createElement('div');
cardContainer3.classList.add('card3');
potions.forEach(function (potion) {

  const card3 = document.createElement('div');
  card3.classList.add('cardDiv3');

  const name = document.createElement('h2');
  name.classList.add('nameDiv');
  
  const description = document.createElement('p');
  description.classList.add('descriptionDiv');
  
  name.textContent = potion.name;
  card3.appendChild(name);
  
  description.textContent = 'Description: ' + potion.description;
  card3.appendChild(description);
  
  cardContainer3.appendChild(card3);
  
  });
return (cardContainer3)
}

function createBook(){
  const cardContainer4 = document.createElement('div');
  books.forEach(function (book) {
      
    const card4 = document.createElement('div');
    card4.classList.add('cardDiv4');
    
    const name = document.createElement('h2');
    name.classList.add('nameDiv');
      
    const id = document.createElement('p');
    id.classList.add('idDiv');
      
    const releaseDay = document.createElement('p');
    releaseDay.classList.add('releaseDayDiv');
      
    const author = document.createElement('p');
    author.classList.add('authorDiv');

    const description = document.createElement('p');
    description.classList.add('descriptionDiv');
      
    name.textContent = book.title;
    card4.appendChild(name);
      
    id.textContent = 'Other Number: ' + book.id;
    card4.appendChild(id);
      
    releaseDay.textContent = 'Release Day: ' + book.releaseDay;
    card4.appendChild(releaseDay);
      
    author.textContent = 'Author: ' + book.author;
    card4.appendChild(author);

    description.textContent = 'Description: ' + book.description;
    card4.appendChild(description);
      
    cardContainer4.appendChild(card4);
      
  });  
  return (cardContainer4)
}



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

    