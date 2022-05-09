import data from './data/harrypotter/harry.js';

import { filterHouse, filterSpells, createCharacter, createSpell, createPotion, createBook, ordenarTexto} from './data.js';

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
  const cardCharacters= createCharacter(characters);
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.appendChild(cardCharacters)
  filterHouseStart();
  alphabetOrder()
}
if (pathName=="/src/spells.html"){
  const cardSpells= createSpell(spells);
  const cardContainer2 = document.getElementById('cardContainer2');
  cardContainer2.appendChild(cardSpells);
  filterSpellStart()
}
if (pathName=="/src/potions.html"){
  const cardPotions= createPotion(potions);
  const cardContainer3 = document.getElementById('cardContainer3');
  cardContainer3.appendChild(cardPotions)
}
if (pathName=="/src/books.html"){
  const cardBooks= createBook(books);
  const cardContainer4 = document.getElementById('cardContainer4');
  cardContainer4.appendChild(cardBooks)
}


function filterHouseStart(){
const houseSelect = document.getElementById('houseS')
houseSelect.addEventListener("change", function () {
  
  const house = houseSelect.options[houseSelect.selectedIndex].text;
  const resulHouse = filterHouse(characters, house);

  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = '';

  resulHouse.forEach(function (character) {
    cardContainer.innerHTML +=
      `<div class='cardDiv'>
        <div class='photo'>
          <img class='avatar' src='imagenes/Mago2.png'> </img>
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
}

function filterSpellStart(){
const spellsSelect = document.getElementById('spellsS')
spellsSelect.addEventListener("change", function () {
  
  const type = spellsSelect.options[spellsSelect.selectedIndex].text;
  const resultSpells = filterSpells(spells, type);

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
}

function alphabetOrder(){
  const alphabet = document.getElementById('alphabet')
  alphabet.addEventListener("click", ordenarTexto(characters))}; 

    // const orderText= ordenarTexto(characters)
    // const cardContainer = document.getElementById('cardContainer');
    // cardContainer.innerHTML = '';

    // orderText.forEach(function (character) {
    //   cardContainer.innerHTML +=
    //     `<div class='cardDiv'>
    //       <div class='photo'>
    //         <img class='avatar' src='imagenes/Mago2.png'> </img>
    //       </div>
    //       <div class='textDiv'>
    //         <h2 class='nameDiv'> ${character.name}</h2> 
    //         <p class='birthDiv'> Birth: ${character.birth}</p>
    //         <p class='ancestryDiv'> Ancestry: ${character.ancestry}</p>
    //         <p class='houseDiv'> House: ${character.house}</p>
    //         <p class='wandDiv'> Wand: ${character.wand}</p>
    //         <p class='patronusDiv'>Patronus: ${character.patronus}</p>
    //         <p class='bookFeaturedDiv'>Book feature: ${character.books_featured_in}</p>
    //         <p class='deathDiv'>Death: ${character.death}</p>
    //       </div>
    //     </div>`
    // });
  // })};
// function filterCharactersStart(){
//   const houseSelect = document.getElementById('houseS')
//   if (houseSelect.addEventListener("change")){
  
//   //  function (){
//     const house = houseSelect.options[houseSelect.selectedIndex].text;
//     const result = filterHouse(characters, house);

// const cardContainer = document.getElementById('cardContainer');
//   cardContainer.innerHTML = '';

//   result.forEach(function (character) {
//     cardContainer.innerHTML +=
//       `<div class='cardDiv'>
//         <div class='photo'>
//           <img class='avatar' src='imagenes/Mago2.png'> </img>
//         </div>
//         <div class='textDiv'>
//           <h2 class='nameDiv'> ${character.name}</h2> 
//           <p class='birthDiv'> Birth: ${character.birth}</p>
//           <p class='ancestryDiv'> Ancestry: ${character.ancestry}</p>
//           <p class='houseDiv'> House: ${character.house}</p>
//           <p class='wandDiv'> Wand: ${character.wand}</p>
//           <p class='patronusDiv'>Patronus: ${character.patronus}</p>
//           <p class='bookFeaturedDiv'>Book feature: ${character.books_featured_in}</p>
//           <p class='deathDiv'>Death: ${character.death}</p>
//         </div>
//       </div>`
//   });
//   }