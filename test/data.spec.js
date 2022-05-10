import { filterHouse, filterSpells, createCharacter, createSpell, createPotion, createBook } from '../src/data.js';
import data from './data/harrypotter/harry.js';

describe('filterHouse-Debe filtrar todos los characters por casa', () => {
  
  test('funcion filtrado', () => {
    const characters = data.characters
    const filtered = filterHouse(characters, 'Slytherin')
    expect(filtered ).toContain(characters);
  });
});
//   it('returns `characters.filter', () => {
//     expect(characters.filter()).toBe('function');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
