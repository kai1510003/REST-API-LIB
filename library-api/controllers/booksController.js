const Book = require('../models/Book');
const books = require('../data/books');
const { v4: uuidv4 } = require('uuid');


// 📚 Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.json(allBooks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// 🔍 Get a book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: 'Invalid ID or server error' });
  }
};

// ➕ Create a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, year, copies } = req.body;
    if (!title || !author || !year || copies == null) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBook = new Book({ title, author, year, copies });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: 'Error creating book' });
  }
};

// ✏️ Update an existing book
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: 'Error updating book' });
  }
};

// ❌ Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Book not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Error deleting book' });
  }
};