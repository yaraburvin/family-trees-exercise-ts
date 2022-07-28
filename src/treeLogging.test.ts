import {countPeople, logAllPeopleInTreeWithQueue } from "./treeLogging";
import {createBritishSuccessionTree} from "./families/britain"


test("Returns a list of names", () => {
  expect(logAllPeopleInTreeWithQueue(createBritishSuccessionTree())).toEqual([
    'Queen Elizabeth II', 'Charles',
    'Andrew',             'Edward',
    'Anne',               'William',
    'Harry',              'Beatrice',
    'Eugenie',            'James',
    'Louise',             'Peter',
    'Zara',               'George',
    'Charlotte',          'Louis',
    'Archie',             'August',
    'Savannah',           'Isla',
    'Mia',                'Lena',
    'Lucas'
  ]);

});

test("Returns length of list of names", () => {
    expect(countPeople(["a","b","c","d"])).toBe(4)
});
