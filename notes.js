

const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  return 'Your notes...';
}

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) { 
    return note.title == title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });    
    saveNotes(notes);
    console.log(chalk.green.inverse('new note added...'));
  } else {
    console.log(chalk.red.inverse('note already exists...'));
  }
}

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) { 
    return note.title !== title
  });
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('note removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('no note found!'));
  }
}

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = function () {
  try {
    const buffer = fs.readFileSync('notes.json');
    const dataJson = buffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}