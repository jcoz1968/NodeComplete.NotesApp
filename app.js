const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

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
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
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