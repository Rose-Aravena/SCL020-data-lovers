import data from './data/harrypotter/harry.js';

let characters = data.characters;
let strName = characters.dataset.death;
console.log(strName)


//for (const property in object) {
 //   console.log(`${property}: ${object[property]}`);
//  }

//console.log(characters)

const root = document.getElementById('root');

  const lista = document.createElement('ul');
  
  lista.textContent = `${strName}`;
  root.appendChild (lista);


// function fetchHarry(id) {
//   fetch("./data/harrypotter/harry.json")
//     .then((res) => res.json())
//     .then((data) => {
//       createHarry(data);
//     })
//   }



// export default lista

// export const anotherExample = () => {
//   return 'OMG';
// };
