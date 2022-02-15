const mongoose = require('mongoose');
const CryptoSchema = mongoose.Schema({
  Mname: String,
  Mratting: Number,
  Mtickets_price: Number
   
});

module.exports = mongoose.model('movies', CryptoSchema);