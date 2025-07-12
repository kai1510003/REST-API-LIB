const { v4: uuidv4 } = require('uuid');

let books = [
  { id: uuidv4(), title: '1984', author: 'George Orwell', year: 1949, copies: 3 },
  { id: uuidv4(), title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, copies: 5 }
];

module.exports = books;