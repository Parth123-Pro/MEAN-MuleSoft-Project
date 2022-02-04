const express = require('express');
const router = express.Router();

const Crypto = require('./models/cryptos');
const Nft = require('./models/nfts');

//crypto
router.get('/cryptos', async (request, response) => {  
    const crypto = await Crypto.find();
    response.send(crypto);
});

router.post('/cryptos', async (request, response) => {    
    const crypto = new Crypto(request.body)
    await crypto.save();
    response.send(crypto);
})

router.patch('/cryptos/:name', async (request, response) => {    
    const _id = request.params.name;
    const crypto = await Crypto.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(crypto);
})

router.delete('/cryptos/:name', async (request, response) => {  
    try{
        const _id = request.params.name;
        const crypto = await Crypto.findByIdAndDelete(_id);
        response.send(crypto);
    }catch (e){
        response.send(e);
    }
})

//nft
router.get('/nfts', async (request, response) => {  
    const nft = await Nft.find();
    response.send(nft);
});

router.post('/nfts', async (request, response) => {    
    const nft = new Nft(request.body)
    address.save();
    response.send(nft);
})

router.patch('/nfts/:name', async (request, response) => {   
    const _id = request.params.name;
    const nft = await Nft.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(nft);
})

router.delete('/nfts/:name', async (request, response) => {
    const _id = request.params.name;
    const nft = await Nft.findByIdAndDelete(_id);
    response.send(nft);
})
module.exports = router;