const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding a new note');
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing note');
  }
});

yargs.command({
  command: 'list',
  describe: 'list notes',
  handler: function () {
    console.log('List notes');
  }
});

yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: function () {
    console.log('Read note');
  }
});

console.log(process.argv);
console.log(yargs.argv);