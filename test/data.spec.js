import {textOrder, filterHouse, createCharacter, filterSpells, createSpell, createPotion, createBook, createFunfacts} from '../src/data.js';

describe('textOrder-Must order an array alphabetically', () => {
  
  test('funcion textOrder', () => {
    let characters = [{"name": "Euan Abercrombie", "house": "Gryffindor"},{"name": "Stewart Ackerley","house": "Ravenclaw"}, {"name": "Avery I", "house": "Slytherin"}]
    const result = [{"name": "Avery I", "house": "Slytherin"},{"name": "Euan Abercrombie", "house": "Gryffindor"},{"name": "Stewart Ackerley","house": "Ravenclaw"} ]
    let order = textOrder(characters)
    expect(order).toEqual(result);
  });
});

describe('filterHouse-Must filter all the characters by house', () => {
  
  test('filter function', () => {
    let characters = [{"name": "Euan Abercrombie", "house": "Gryffindor"},{"name": "Stewart Ackerley","house": "Ravenclaw"}, {"name": "Avery I", "house": "Slytherin"}]
    const house = "Slytherin"
    const result = [{"name": "Avery I", "house": "Slytherin"}]
    let filtered = filterHouse(characters, house)
    expect(filtered).toEqual(result);
  });
});
describe('filterSpells-Must filter all the spells by type', () => {
  
  test('filter spells function', () => {
    let spells = [{"name": "Aberto", "spell_type": "Charm"},{"name": "Anteoculatia","spell_type": "Hex"}, {"name": "Anti-Disapparition Jinx", "spell_type": "Jinx"}]
    const spell_type = "Jinx"
    const result = [{"name": "Anti-Disapparition Jinx", "spell_type": "Jinx"}]
    let filtered = filterSpells(spells, spell_type)
    expect(filtered).toEqual(result);
  });
});

describe('createCharacter must return a Div', () => {

  test('createCharacter function', () =>{
    let characters = [{"name": "Euan Abercrombie", "house": "Gryffindor"},{"name": "Stewart Ackerley","house": "Ravenclaw"}, {"name": "Avery I", "house": "Slytherin"}]
    let create = createCharacter(characters)
    expect(create instanceof HTMLElement).toBe(true)
  })
})

describe('createSpell must return a Div', () => {

  test('createSpell function', () =>{
    let spells = [{"name": "Aberto", "spell_type": "Charm"},{"name": "Anteoculatia","spell_type": "Hex"}, {"name": "Anti-Disapparition Jinx", "spell_type": "Jinx"}]
    let create = createSpell(spells)
    expect(create instanceof HTMLElement).toBe(true)
  })
})

describe('createPotion must return a Div', () => {

  test('createPotion function', () =>{
    let potions = [{"name": "Ageing Potion", "description": "A potion that, depending on the amount taken, ages the drinker to various ages."},{"name": "Anti-Paralysis Potion", "description": "A potion that heals paralysis."},{"name": "Angel's Trumpet Draught", "description": "Effects and usage of this potion are unknown."}]
    let create = createPotion(potions)
    expect(create instanceof HTMLElement).toBe(true)
  })
})

describe('createBook must return a Div', () => {

  test('createBook function', () =>{
    let books = [{"title": "Harry Potter and the Sorcerer's Stone", "releaseDay": "June 26, 1997"},{"title": "Harry Potter and the chamber of secrets","releaseDay": "July 2, 1998"}, {"title": "Harry Potter and the Prisoner of Azkaban", "releseDay": "July 8, 1999"}]
    let create = createBook(books)
    expect(create instanceof HTMLElement).toBe(true)
  })
})

describe('createFunfacts must return a Div', () => {

  test('createFunfacts function', () =>{
    let funFacts = [{"type": "Author", "content": "J. K. Rowling"},{"type": "Protagonist","content": "Harry Potter"}, {"type": "Antatagonist", "content": "Lord Voldemort"}]
    let create = createFunfacts(funFacts)
    expect(create instanceof HTMLElement).toBe(true)
  })
})