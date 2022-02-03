const mongoose = require('mongoose');
const CryptoSchema = mongoose.Schema({
  name: String,
  price: Number,
   
});

module.exports = mongoose.model('cryptos', CryptoSchema);