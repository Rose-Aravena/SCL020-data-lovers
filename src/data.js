
function textOrder(characters) {
  characters.sort((a, b) => {
    return a.name.toLowerCase () > b.name.toLowerCase () ? 1 : -1
  })
  return characters;
 }
const filterHouse = (characters,house)=>{
 return characters.filter(character => character.house === house);
}

const filterSpells = (spells,spell_type)=>{
 return spells.filter(spell => spell.spell_type === spell_type);
}

function createCharacter(characters){
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

    photo.textContent = photo.src = 'imagenes/Mago2.png'
    cardPhoto.appendChild(photo);
    card.appendChild(cardPhoto);

    name.textContent = character.name;
    text.appendChild(name);

    birth.textContent = `Birth: ${character.birth == null ? 'Mistery':character.birth}`;
    text.appendChild(birth);
    // character?.birth === null
    ancestry.textContent = `Ancestry: ${character.ancestry == null ? 'Mistery':character.ancestry}`;
    text.appendChild(ancestry);
    
    house.textContent = `House: ${character.house == null ? 'Mistery':character.house}`;
    text.appendChild(house);

    wand.textContent = `Wand: ${character.wand == null ? 'Mistery':character.wand}`;
    text.appendChild(wand);

    patronus.textContent = `Patronus: ${character.patronus == null ? 'Mistery':character.patronus}`;
    text.appendChild(patronus);

    bookFeatured.textContent = `Appearances: ${character.books_featured_in == null ? 'Mistery':character.books_featured_in}`;
    text.appendChild(bookFeatured);

    death.textContent = `Death: ${character.death == null ? 'Mistery':character.death}`;
    text.appendChild(death);

    card.appendChild(cardPhoto);
    card.appendChild(text);
    cardContainer.appendChild(card);
    });
return (cardContainer)
}

function createSpell(spells){
  const cardContainer2 = document.createElement('div');
  cardContainer2.classList.add('card2');
  spells.forEach(function (spell) {

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

  other_name.textContent = `Other Name: ${spell.other_name == null ? 'Mistery':spell.other_name}`;
  card2.appendChild(other_name);

  pronunciation.textContent = `Pronunciation: ${spell.pronunciation == null ? 'Mistery':spell.pronunciation}`;
  card2.appendChild(pronunciation);

  type.textContent = `Type: ${spell.spell_type == null ? 'Mistery':spell.spell_type}`;
  card2.appendChild(type);

  description.textContent = `Description: ${spell.description == null ? 'Mistery':spell.description}`;
  card2.appendChild(description);

  cardContainer2.appendChild(card2);

});
return (cardContainer2)
}

function createPotion(potions){
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
  
  description.textContent = `Description: ${potion.description == "Unknown" ? 'Mistery':potion.description}`;
  card3.appendChild(description);
  
  cardContainer3.appendChild(card3);
  
  });
return (cardContainer3)
}

function createBook(books){
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
      
    id.textContent = 'Book Number: ' + book.id;
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

function createFunfacts(funFacts){
  const funfactsCont = document.createElement('div');
  funfactsCont.classList.add('cont');
  funFacts.splice(0, 3);
  
  funFacts.forEach(function (facts) {

    const cont = document.createElement('div');
    cont.classList.add('contDiv');

    const type = document.createElement('h4');
    type.classList.add('typeFFDiv');

    const content = document.createElement('p');
    content.classList.add('contentDiv');

    type.textContent = '• ' + facts.type + ':';
    cont.appendChild(type);

    content.textContent = facts.content;
    cont.appendChild(content);

    funfactsCont.appendChild(cont);
    });
return (funfactsCont)
}

export {filterHouse, filterSpells, createCharacter, createSpell, createPotion, createBook, textOrder , createFunfacts};


