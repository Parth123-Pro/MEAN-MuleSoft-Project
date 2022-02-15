const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./routes");

const port = process.env.PORT || 3000;
const uri = "mongodb+srv://movie:movie123@cluster0.g2voi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true}).then(() => { 
    console.log('Connected'); 

    const app = express(); 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(routes);

    app.get('/', (request, response) => {
        response.sendFile('index.html',{root:__dirname});
    })
    
    app.listen(port, () => {    
        console.log('server started');
    });
    

}).catch((e) => {  
    console.log(e.toString());
})