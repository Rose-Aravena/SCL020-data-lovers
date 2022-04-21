import characters from './data.js';

//import harry from './data/harrypotter/harry.js';
// // import data from './data/rickandmorty/rickandmorty.js';



const alohomoraButton = document.getElementById('alohomoraB');

if (alohomoraButton) {
    alohomoraButton.addEventListener("click", function () {
      window.location.href = "menu.html";
    });
  }


  const root = document.getElementById('root');

  const lista = document.createElement('ul');
  
  lista.textContent = `${characters}`;
  root.appendChild (lista);
