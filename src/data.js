const root = document.getElementById('root');

const lista = document.createElement('ul');

lista.textContent = 'CHARACTERS';
root.appendChild (lista);

// function fetchHarry(id) {
//   fetch("./data/harrypotter/harry.json")
//     .then((res) => res.json())
//     .then((data) => {
//       createHarry(data);
//     })
//   }



export default lista

// export const anotherExample = () => {
//   return 'OMG';
// };
