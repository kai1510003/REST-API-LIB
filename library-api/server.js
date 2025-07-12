const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
connectDB()
const bookRoutes = require('./routes/books');

const app = express();

app.use(bodyParser.json());

app.use('/api/books', bookRoutes);

const path = require('path');
const { connect } = require('http2');

// serve everything in /public as static assets
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Library API running on http://localhost:${PORT}`);
});