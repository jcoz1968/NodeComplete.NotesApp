const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);
// const parsedData = JSON.parse(bookJSON);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const data = JSON.parse(dataBuffer.toString());

data.name = 'Brenna';
data.age = 21;

fs.writeFileSync('1-json.json', JSON.stringify(data));


