const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: String
}, { collection: 'contacts' });

module.exports = mongoose.model('Contact', contactSchema);
