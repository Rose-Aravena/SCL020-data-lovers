// export const houses = characters.filter(function(gryffindor){
//   if (characters.house === 'Gryffindor'){
//   return true
// }
// })

const filterHouse = (characters,house)=>{
 return characters.filter(character => character.house === house);
}
// export {filterHouse};

const filterSpells = (spells,spell_type)=>{
 return spells.filter(spell => spell.spell_type === spell_type);
}


function createCharacter(){
  const cardContainer = document.createElement('div');
  characters.forEach(function (character) {
 
   const card = document.createElement('div');
    card.classList.add('cardDiv');

    const photo = document.createElement('img');
    photo.classList.add('avatar');

    const name = document.createElement('h2');
    name.classList.add('nameDiv');

    const house = document.createElement('p');
    house.classList.add('houseDiv');

    const birth = document.createElement('p');
    birth.classList.add('birthDiv');

    const wand = document.createElement('p');
    wand.classList.add('wandDiv');

    const patronus = document.createElement('p');
    patronus.classList.add('patronusDiv');

    const bookFeatured =document.createElement('p');
    bookFeatured.classList.add('bookFeaturedDiv');

    photo.textContent = photo.src = 'imagenes/Mago.png'
    card.appendChild(photo);

    name.textContent = character.name;
    card.appendChild(name);

    house.textContent = 'House: ' + character.house;
    card.appendChild(house);

    birth.textContent = 'Birth: ' + character.birth;
    card.appendChild(birth);

    wand.textContent = 'Wand: ' + character.wand;
    card.appendChild(wand);

    patronus.textContent = 'Patronus: ' + character.patronus;
    card.appendChild(patronus);

    bookFeatured.textContent = 'Book feature: '+ character.books_featured_in;
    card.appendChild(bookFeatured);

    cardContainer.appendChild(card);
    });
return (cardContainer)
}

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


export {filterHouse, filterSpells,createSpell};
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
