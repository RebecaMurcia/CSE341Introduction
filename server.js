
var express = require('express');
var app = express();

require('dotenv').config();
const MONGOURI = process.env.MONGODB_URI;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const contactsRoute = require('./routes/contacts');

app.use('/api/contacts', contactsRoute);


const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
