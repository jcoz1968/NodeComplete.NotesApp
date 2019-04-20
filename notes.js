

const fs = require('fs');

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
    console.log('new note added...')
  } else {
    console.log('note already exists...')
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
  addNote: addNote
}