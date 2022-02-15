const express = require('express');
const router = express.Router();

const Movie = require('./models/movie');


//movie
router.get('/movies',async(req,res)=>{
    const imovie = await Movie.find()
    res.send(imovie)
})

//to add the movies
router.post("/movies",async(req,res)=>{
    const imovie = new Movie({
        Mname:req.body.Mname,
        Mratting:req.body.Mratting,
        Mtickets:req.body.Mtickets
    })

    await imovie.save((err,msg)=>{
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
router.patch('/movies/:id', async (request, response) => {   
    const _id = request.params.id;
    const imovie = await Movie.findByIdAndUpdate(_id, request.body, {new: true});
        imovie.Mname=req.body.Mname
       imovie.Mratting=req.body.Mratting
        imovie.Mtickets=req.body.Mtickets
    response.send(imovie);
})


//deleting the data
router.delete('/movies/:id', async (request, response) => {   
    try{
        const _id = request.params.id;
        const imovie = await Movie.findByIdAndDelete(_id);
        response.send(imovie);
    }catch (e){
        response.send(e);
    }
})

module.exports = router;