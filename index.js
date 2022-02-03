const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./routes");

const port = process.env.PORT || 3000;
const uri = "mongodb+srv://Parth:parth123@currencies.g2voi.mongodb.net/currencies?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true}).then(() => { 
    console.log('Connected'); 

    const app = express(); 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use('/api',routes);

    app.get('/', (request, response) => {
        response.sendFile('index.html',{root:__dirname});
    })
    
    app.listen(port, () => {    
        console.log('server started');
    });
    

}).catch((e) => {  
    console.log(e.toString());
})


