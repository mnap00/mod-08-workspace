// script.js

/*
 * turn off that part of test code
var name = prompt('Enter your name');
// turn off popup window
// alert('Hello, ' + name);
// leave console printing
console.log('Hello, ' + name);
*/


// VARIABLES

// variable declaration
var variable;  // no initial value
var foo = 12;  // foo is equal to: 12;
var string = 'test';  // string is equal to: 'test';
var isSomething = true;  // isSomething is equal to: true
// many variables at once
var variable,
     variable2 = 19,
     variable3;


// DATA TYPES

// boolean
var isActive = true;

// string
var userName = "Jan Kowalski";
// quoting inside string
var firstSentence = 'I like a song that is called \'Only you\'.';
var secondSentence = "I love a song that is called \'Only you\'.";
// or
//var firstSentence = 'I like a song that is called "Only you".';
//var secondSentence = "I love a song that is called 'Only you'.";

// numbers
var age = 23; // - integer (int)
var money = 25.90; // - floating point (float)

// arrays
var hobby = ['HTML', 'CSS', 'JavaScript'];
// nested arrays
var test = ['HTML', 5, 'World', 9.99, ['Lorem', 'Ipsum', 2]];
// assign variable value from array
var fooBar = test[2];  // World
// or
var foo = test[4];  // ['Lorem', 'Ipsum', 2]
var bar = foo[1];  // Ipsum

// objects
var variable = 'variable value';
var object = {
    attribute: 'attribute value',
    otherAttribute: 123 + 456,
    attributeWithVariableValue: variable

};
// or
var person = {
    name: 'Jon',
    surname: 'Snow',
    siblings: 5,
    knownThings: ['Nothing','Night Watch']

};
// read values from objects
var userName = person.name;
var userSurname = person['surname'];

// special values are:
// undefined i.e. does not exist
var person;
console.log(person);  // undefined
// null i.e. not a proper value
// NaN i.e. not a number
console.log(10 * 'napis');  // NaN
// infinity i.e. error on operations


// OPERATORS

// addition
var foo = 'lorem' + 'Ipsum';  // loremIpsum
foo = 'lorem' + 1 + 2;  // lorem12 - first type is string
foo = 1+2+'lorem';  // 3lorem - first type is number
// other examples
foo = 'lorem' + ['1', 2, 3.4];     // 'lorem1, 2, 3.4'
foo = ['1', 2, 3.4] + 'lorem';     // '1,2,3.4lorem'
foo = 9 + ['1', 2, 3.4];             // '91,2,3.4'
foo = ['1', 2, 3.4] + 9;             // '1,2,3.49'
foo = ['1', 2, 3.4] + [1, '2', 3.4];  // '1,2,3.41,2,3.4'
foo = ['1', 2, 3.4] + {bar: 'lorem'}; // 1, 2, 3.4 [object Object]
foo = {bar: 'lorem'} + [1, '2', 3.4]; // [object Object] 1, 2, 3.4
foo = ['1', 2, 3.4] + undefined; // 1, 2, 3.4 undefined
foo = undefined + [1, '2', 3.4]; // undefined 1, 2, 3.4

// increment
var points = 1;
points = points + 1;
// or short
var points = 1;
points += 1;
// example script
var points = 1;
console.log( 'The current value of points is: ', points ); // 1
console.log( 'The current value of points is: ', points++ ); // 1
console.log( 'The current value of points is: ', points ); // 2
// and with reverted operations
var points = 1;
console.log( 'The current value of points is: ', points ); // 1
console.log( 'The current value of points is: ', ++points ); // 2
console.log( 'The current value of points is: ', points ); // 2

// decrement
points = points - 1;
points -= 1;

// modulus
var x = 15,
    foo;
foo = x % 2;  // 1
foo = x % 3;  // 0
foo = x % 5;  // 0


