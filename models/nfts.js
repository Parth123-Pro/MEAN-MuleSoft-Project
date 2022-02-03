const mongoose = require('mongoose');
const NftSchema = mongoose.Schema({
   name: String,
   price: Number,
});

module.exports = mongoose.model('nfts', NftSchema);