const express = require("express");
const mongoose = require("mongoose");
const Router = require("routes");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://Parth:   @cluster0.g2voi.mongodb.net/cryptos?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running...");
});
