const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const data = JSON.parse(dataBuffer.toString());

data.name = 'Brenna';
data.age = 21;

fs.writeFileSync('1-json.json', JSON.stringify(data));


