import data from './data/harrypotter/harry.js';

let characters = data.characters;
// let name = Array.from(characters);
console.log(characters[10])

  characters.forEach(function(character){
      //console.log(character)
      const root = document.getElementById('root');
      const lista = document.createElement('h2');
      lista.textContent = character.name;
      root.appendChild (lista);

      const p = document.createElement('p');
      p.textContent = character.house;
      root.appendChild (p);
  })

//const mapCharacters = Object.keys(characters.map(key =>
  //  {
    //    const value = characters[key]
      //  console.log(value)
   // }))


//console.log(characters)

//const root = document.getElementById('root');

  //const lista = document.createElement('ul');
  
  //lista.textContent = `${characters}`;
  //root.appendChild (lista);


// function fetchHarry(id) {
//   fetch("./data/harrypotter/harry.json")
//     .then((res) => res.json())
//     .then((data) => {
//       createHarry(data);
//     })
//   }


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
