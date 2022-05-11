import {ordenarTexto, filterHouse, createCharacter, filterSpells, createSpell, createPotion, createBook, createFunfacts} from '../src/data.js';

describe('ordenarTexto-Debe ordenar un array por orden alfabetico', () => {
  
  test('funcion ordenarTexto', () => {
    let characters = [{"name": "Euan Abercrombie", "house": "Gryffindor"},{"name": "Stewart Ackerley","house": "Ravenclaw"}, {"name": "Avery I", "house": "Slytherin"}]
    const result = [{"name": "Avery I", "house": "Slytherin"},{"name": "Euan Abercrombie", "house": "Gryffindor"},{"name": "Stewart Ackerley","house": "Ravenclaw"} ]
    let order = ordenarTexto(characters)
    expect(order).toEqual(result);
  });
});

describe('filterHouse-Debe filtrar todos los characters por casa', () => {
  
  test('funcion filtrado', () => {
    let characters = [{"name": "Euan Abercrombie", "house": "Gryffindor"},{"name": "Stewart Ackerley","house": "Ravenclaw"}, {"name": "Avery I", "house": "Slytherin"}]
    const house = "Slytherin"
    const result = [{"name": "Avery I", "house": "Slytherin"}]
    let filtered = filterHouse(characters, house)
    expect(filtered).toEqual(result);
  });
});
describe('filterSpells-Debe filtrar todos los characters por type spell', () => {
  
  test('funcion filtrado', () => {
    let spells = [{"name": "Aberto", "spell_type": "Charm"},{"name": "Anteoculatia","spell_type": "Hex"}, {"name": "Anti-Disapparition Jinx", "spell_type": "Jinx"}]
    const spell_type = "Jinx"
    const result = [{"name": "Anti-Disapparition Jinx", "spell_type": "Jinx"}]
    let filtered = filterSpells(spells, spell_type)
    expect(filtered).toEqual(result);
  });
});

describe('createCharacter debe retornar un Div', () => {

  test('funcion createCharacter', () =>{
    let characters = [{"name": "Euan Abercrombie", "house": "Gryffindor"},{"name": "Stewart Ackerley","house": "Ravenclaw"}, {"name": "Avery I", "house": "Slytherin"}]
    let create = createCharacter(characters)
    expect(create instanceof HTMLElement).toBe(true)
  })
})

describe('createSpell debe retornar un Div', () => {

  test('funcion createSpell', () =>{
    let spells = [{"name": "Aberto", "spell_type": "Charm"},{"name": "Anteoculatia","spell_type": "Hex"}, {"name": "Anti-Disapparition Jinx", "spell_type": "Jinx"}]
    let create = createSpell(spells)
    expect(create instanceof HTMLElement).toBe(true)
  })
})

describe('createPotion debe retornar un Div', () => {

  test('funcion createPotion', () =>{
    let potions = [{"name": "Ageing Potion", "description": "A potion that, depending on the amount taken, ages the drinker to various ages."},{"name": "Anti-Paralysis Potion", "description": "A potion that heals paralysis."},{"name": "Angel's Trumpet Draught", "description": "Effects and usage of this potion are unknown."}]
    let create = createPotion(potions)
    expect(create instanceof HTMLElement).toBe(true)
  })
})

describe('createBook debe retornar un Div', () => {

  test('funcion createBook', () =>{
    let books = [{"title": "Harry Potter and the Sorcerer's Stone", "releaseDay": "June 26, 1997"},{"title": "Harry Potter and the chamber of secrets","releaseDay": "July 2, 1998"}, {"title": "Harry Potter and the Prisoner of Azkaban", "releseDay": "July 8, 1999"}]
    let create = createBook(books)
    expect(create instanceof HTMLElement).toBe(true)
  })
})

describe('createFunfacts debe retornar un Div', () => {

  test('funcion createFunfacts', () =>{
    let funFacts = [{"type": "Author", "content": "J. K. Rowling"},{"type": "Protagonist","content": "Harry Potter"}, {"type": "Antatagonist", "content": "Lord Voldemort"}]
    let create = createFunfacts(funFacts)
    expect(create instanceof HTMLElement).toBe(true)
  })
})