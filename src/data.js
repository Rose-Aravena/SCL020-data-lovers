import data from './data/harrypotter/harry.js';

let characters = data.characters;

characters.forEach(function(character){
const cardContainer = document.getElementById('cardContainer');
const list = document.createElement('h2');
const house = document.createElement('h3')
const birth = document.createElement('h4')

list.classList.add("list");
  list.textContent = character.name;
  cardContainer.appendChild (list);
  
  house.textContent = character.house;
  cardContainer.appendChild (house);

  birth.textContent = character.birth;
  cardContainer.appendChild (birth);
  
})




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
