const path = require('path')

console.log(path.sep) //platform separator is returned
const filePath = path.join('/coffee-shop', 'public', 'images', 'about.jpg'); // normalizes or joins the file path
console.log(filePath);
