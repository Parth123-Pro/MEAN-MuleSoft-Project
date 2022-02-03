const express = require('express');
const router = express.Router();
var User = require('./Models/user')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
const Crypto = require('./models/cryptos');
const req = require('express/lib/request');

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
router.post('/users',async(req,res)=>{
    
  //generate salt key
  salt = await bcrypt.genSalt(10)
  console.log(salt)

  hashedpswd = await bcrypt.hash(req.body.password,salt)
  console.log(hashedpswd)

  const iuser = new User({
      uname:req.body.uname,
      password:hashedpswd
  })  
  await iuser.save((err,msg)=>{
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

module.exports = router;