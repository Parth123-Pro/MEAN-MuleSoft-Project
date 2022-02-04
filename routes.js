const express = require('express');
const router = express.Router();

const Crypto = require('./models/cryptos');
const Nft = require('./models/nfts');

//crypto
router.get('/cryptos',async(req,res)=>{
    const icryptos = await Crypto.find()
    res.send(icryptos)
})

//to add the movies
router.post("/cryptos",async(req,res)=>{
    const icryptos = new Crypto({
        name:req.body.name,
        price:req.body.price
    })

    await icryptos.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating movie
router.patch('/cryptos/:id', async (request, response) => {   
    const _id = request.params.id;
    const icryptos = await Crypto.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(icryptos);
})


//deleting the data
router.delete('/cryptos/:id', async (request, response) => {   
    try{
        const _id = request.params.id;
        const icrypto = await Crypto.findByIdAndDelete(_id);
        response.send(icryptos);
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