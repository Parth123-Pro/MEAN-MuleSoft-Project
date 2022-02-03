const express = require('express');
const router = express.Router();

const AddressI = require('./models/cryptos');
const PersonI = require('./models/nfts');
const req = require('express/lib/request');

//crypto
router.get('/cryptos', async (request, response) => {  
    const data = await Crypto.find();
    response.send(data);
});

router.post('/cryptos', async (request, response) => {    
    const crypto = new PersonI(request.body)
    await crypto.save();
    response.send(crypto);
})

router.patch('/cryptos/:name', async (request, response) => {    
    const _id = request.params.name;
    const crypto = await Crypto.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(crypto);
})

router.delete('/person/:name', async (request, response) => {  
    try{
        const _id = request.params.name;
        const crypto = await Crypto.findByIdAndDelete(_id);
        response.send(crypto);
    }catch (e){
        response.send(e);
    }
})

//nft
router.get('/address', async (request, response) => {  // fetch
    const data = await AddressI.find();
    response.send(data);
});

router.post('/address', async (request, response) => {    // insert
    const address = new AddressI(request.body)
    address.save();
    response.send(address);
})

router.patch('/address/:id', async (request, response) => {    // update
    const _id = request.params.id;
    const address = await AddressI.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(address);
})

router.delete('/address/:id', async (request, response) => {
    const _id = request.params.id;
    const address = await AddressI.findByIdAndDelete(_id);
    response.send(address);
})
module.exports = router;