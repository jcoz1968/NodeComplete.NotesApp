const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Coz.');
fs.appendFileSync('notes.txt', ' This is appended to the original text.');