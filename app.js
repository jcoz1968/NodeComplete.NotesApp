const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'      
    }
  },
  handler: function (argv) {
    console.log('title: ' + argv.title);
    console.log('body: ' + argv.body);
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

// console.log(process.argv);
// console.log(yargs.argv);
yargs.parse();