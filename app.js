const validator = require('validator');
const getNotes = require('./notes');

const notesMessage = getNotes();

console.log(notesMessage);

// console.log(validator.isEmail('coz@nodehero.com'));
console.log(validator.isURL('https://www.npmjs.com'));


