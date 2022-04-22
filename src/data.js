import data from './data/harrypotter/harry.js';

let characters = data.characters;


const result = characters.filter(character => character.house === 'Gryffindor')

console.log('Result', result);

characters.forEach(function(character){
const cardContainer = document.getElementById('cardContainer');
const list = document.createElement('h2');
const house = document.createElement('h3');
const birth = document.createElement('h4');
const wand = document.createElement('h5');
const patronus =document.createElement('h6');

list.classList.add("list");
  list.textContent = character.name;
  cardContainer.appendChild (list);
  
  house.textContent = character.house;
  cardContainer.appendChild (house);

  birth.textContent = character.birth;
  cardContainer.appendChild (birth);

  wand.textContent = character.wand;
  cardContainer.appendChild (wand);

  patronus.textContent = character.patronus;
  cardContainer.appendChild (patronus);
  
});

// const sorts = characters.sort((a,b)=>a-b);

// console.log('Sorts', sorts);
let spells = data.spells;

let potions = data.potions;

let books = data.books;

let funFacts = data.funFacts;


// const cursor = document.querySelector('cursor');

// const addEventListeners = () => {
//   document.addEventListener("mousemove", onMouseMove);
// };

// const onMouseMove = (e) => {
//   // https://css-tricks.com/updating-a-css-variable-with-javascript/
//   cursor.style.setProperty('--cursor-x', e.clientX + "10px");
//   cursor.style.setProperty('--cursor-y', e.clientY + "10px");
// };

// document.addEventListener('mousemove', e =>{
// cursor.setAttribute("syle", "top: " + (e.pageY -10) + "px; left: "+  (e.pageX -15) + "px;");
// })

// const flipCard = document.createElement("div");
// let name = Array.from(characters);
// console.log(characters[10])



//  function createCard(char) {
//   flipCard.classList.add("flip-card");
      
//   cardContainer.classList.add("cardContainer");
//   flipCard.appendChild(cardContainer);
//   }
        //console.log(character)


      // const p = document.createElement('p');




//const mapCharacters = Object.keys(characters.map(key =>
  //  {
    //    const value = characters[key]
      //  console.log(value)
   // }))


// for (const property in object) {
//    console.log(`${property}: ${object[property]}`);
//  }


// console.log(characters)


// const root = document.getElementById('root');

//   const lista = document.createElement('ul');
  
//   lista.textContent = `${strName}`;
//   root.appendChild (lista);



// function fetchHarry(characters) {
//   fetch(`data/harrypotter/harry.json/${characters}/`)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
//     }

// function fetchName(offset, limit) {
//   spinner.style.display = "block";
//   for (let i = offset; i <= offset + limit; i++) {
//     fetchHarry(i);
//   }
// }
    
// function createCard(characters) {
//   const flipCard = document.createElement("div");
//   flipCard.classList.add("flip-card");
    
//   const cardContainer = document.createElement("div");
//   cardContainer.classList.add("card-container");
    
//   flipCard.appendChild(cardContainer);
// }
// function fetchNames(name) {
//   fetch(`./data/harrypotter/harry.json/characters/${name}/`)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
//     }

//     fetchNames();
// function fetchNames(name) {
//   for (let i = 1; i <= Number; i++) {
//     fetchHarry(i);
// }
// }


// for (const property in object) {
//    console.log(`${property}: ${object[property]}`);
//  }

// console.log(characters)

// const root = document.getElementById('root');

//   const lista = document.createElement('ul');
  
//   lista.textContent = `${strName}`;
//   root.appendChild (lista);


// function fetchHarry(characters) {
//   fetch(`data/harrypotter/harry.json/${characters}/`)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
//     }

// function fetchName(offset, limit) {
//   spinner.style.display = "block";
//   for (let i = offset; i <= offset + limit; i++) {
//     fetchHarry(i);
//   }
// }
    
// function createCard(characters) {
//   const flipCard = document.createElement("div");
//   flipCard.classList.add("flip-card");
    
//   const cardContainer = document.createElement("div");
//   cardContainer.classLis


// export default lista

// export const anotherExample = () => {
//   return 'OMG';
// };
