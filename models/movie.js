const mongoose = require('mongoose');
const CryptoSchema = mongoose.Schema({
  Mname: String,
  Mratting: Number,
  Mtickets: Number,
   
});

module.exports = mongoose.model('movies', CryptoSchema);