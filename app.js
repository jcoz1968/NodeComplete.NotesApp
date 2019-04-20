const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');

const notesMessage = getNotes();

console.log(notesMessage);

// console.log(validator.isEmail('coz@nodehero.com'));
console.log(validator.isURL('https://www.npmjs.com'));

console.log(chalk.green('Success!'));
console.log(chalk.blue.inverse.bold('Blue Success!'));
console.log(chalk.red('Red Success!'));

console.log(chalk.bgGreen('BG Success!'));
console.log(chalk.bgBlue('BG Blue Success!'));
console.log(chalk.bgRed('BG Red Success!'));



