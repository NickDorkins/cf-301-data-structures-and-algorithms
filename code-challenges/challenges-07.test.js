'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named addTea that uses jQuery to add tea to the shopping list.
------------------------------------------------------------------------------------------------ */

let $ = createSnippetWithJQuery(`
  <ul>
    <li>apples</li>
    <li>bananas</li>
    <li>carrots</li>
    <li>beans</li>
    <li>coffee</li>
  </ul>
`);

const addTea = () => {
  $("ul").append("<li>tea</li>");
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named forLoopTwoToThe that, given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.

You may choose to complete this challenge using a for loop, for...in syntax, or for...of syntax.

For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
------------------------------------------------------------------------------------------------ */

const forLoopTwoToThe = (arr) => {
  let array = [];
  for(let i = 0; i < arr.length; i++){
    let returnVal = Math.pow(2, arr[i]);
    array.push(returnVal);
  }
  return array;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named forEachTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 1, but uses forEach instead of a for loop.
------------------------------------------------------------------------------------------------ */

const forEachTwoToThe = (arr) => {
  let newArr = [];
  arr.forEach((array) => {
    let val = Math.pow(2, array);
    newArr.push(val);
  });
  return newArr
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named mapTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 1 and your forEachTwoToThe function from challenge 2, but uses map instead of a for loop or forEach.
------------------------------------------------------------------------------------------------ */

const mapTwoToThe = (arr) => {
  let newArr = [];
  arr.map((array) => {
    let val = Math.pow(2, array);
    newArr.push(val);
  });
  return newArr
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named charCode that, given an array of letters as an input, uses map to return a new array where each element is the result of the `charCodeAt` method on the original array element.

Read the MDN documentation on String.charCodeAt() if necessary.

For example: charCode(['h','i']) returns [104, 105].
------------------------------------------------------------------------------------------------ */

const charCode = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

For example: evenOdd([1,2,3]) returns ['odd','even','odd'].
------------------------------------------------------------------------------------------------ */

const evenOdd = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Use the snorlaxAbilities data, below, for this challenge.

Write a function named extractAbilities that, given the array of abilities, uses map to create an array containing only the ability name.

Note: Because this function is expecting the array of abilities, it will be invoked as:
extractAbilities(snorlaxAbilities.abilities)
------------------------------------------------------------------------------------------------ */

const snorlaxAbilities = {
  abilities: [
    {
      slot: 3,
      is_hidden: true,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/82/',
        name: 'gluttony',
      },
    },
    {
      slot: 2,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/56/',
        name: 'cute charm',
      },
    },
    {
      slot: 1,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/17/',
        name: 'immunity',
      },
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractAbilities = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Use the snorlaxStats data, below, for this challenge.

Write a function named extractStats that, given an array of stats, uses map to return an array of objects containing the stat name and the total.

The total should be the sum of the effort and the baseStat.

Here is an example of a single array element: { name: 'speed', total: 35 }
------------------------------------------------------------------------------------------------ */

const snorlaxStats = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractStats = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-07.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should add tea to the list', () => {
    addTea();
    expect($('li:nth-child(6)').text()).toStrictEqual('tea');
  })
});

describe('Testing challenge 2', () => {
  test('It should return two raised to the power of the integer', () => {
    expect(forLoopTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(forLoopTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });

  test('It should return decimals if the integer is negative', () => {
    expect(forLoopTwoToThe([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 3', () => {
  test('It should return two raised to the power of the integer', () => {
    expect(forEachTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(forEachTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });

  test('It should return decimals if the integer is negative', () => {
    expect(forEachTwoToThe([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return two raised to the power of the integer', () => {
    expect(mapTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(mapTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });

  test('It should return decimals if the integer is negative', () => {
    expect(mapTwoToThe([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

xdescribe('Testing challenge 5', () => {
  test('It should return an array containing the character code for each letter', () => {
    expect(charCode(['C', 'o', 'd', 'e', '3', '0', '1'])).toStrictEqual([ 67, 111, 100, 101, 51, 48, 49 ]);
    expect(charCode(['C', 'o', 'd', 'e', '3', '0', '1']).length).toStrictEqual(7);
  });
});

xdescribe('Testing challenge 6', () => {
  test('It should return an array containing the keys from an object', () => {
    expect(evenOdd([5, 8, 2, 6, 9, 13, 542, 541])).toStrictEqual([ 'odd', 'even', 'even', 'even', 'odd', 'odd', 'even', 'odd' ]);
    expect(evenOdd([5, 8, 2, 6, 9, 13, 542, 541]).length).toStrictEqual(8);
  });

  test('It should work with all odd numbers', () => {
    expect(evenOdd([1, 3, 5, 7, 9])).toStrictEqual([ 'odd', 'odd', 'odd', 'odd', 'odd' ]);
    expect(evenOdd([1, 3, 5, 7, 9]).length).toStrictEqual(5);
  });

  test('It should work with all even numbers', () => {
    expect(evenOdd([2, 4, 6, 8, 10])).toStrictEqual([ 'even', 'even', 'even', 'even', 'even' ]);
    expect(evenOdd([2, 4, 6, 8, 10]).length).toStrictEqual(5);
  });

  test('It should return the string "N/A" if a non-number is included in the array', () => {
    expect(evenOdd([5, 8, 2, 'hi'])).toStrictEqual([ 'odd', 'even', 'even', 'N/A' ]);
    expect(evenOdd([5, 8, 2, 'hi']).length).toStrictEqual(4);
  });
});

xdescribe('Testing challenge 7', () => {
  test('It should return an array containing only the ability names', () => {
    expect(extractAbilities(snorlaxAbilities.abilities)).toStrictEqual(['gluttony', 'cute charm', 'immunity']);
    expect(extractAbilities(snorlaxAbilities.abilities).length).toStrictEqual(3);
  });
});

xdescribe('Testing challenge 8', () => {
  test('It should return an array containing objects with name and total values', () => {
    expect(extractStats(snorlaxStats.stats)).toStrictEqual([
      { name: 'speed', total: 35, },
      { name: 'special-defense', total: 112, },
      { name: 'special-attack', total: 74, },
    ]);
    expect(extractStats(snorlaxStats.stats).length).toStrictEqual(3);
  });
});

function createSnippetWithJQuery(html){
  return cheerio.load(html);
};
