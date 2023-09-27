const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer")



const app = express();
const port = 8000;
const cors = require("cors")
app.use(cors())


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken")


mongoose.connect("mongodb+srv://desireirankundawilliams:Desireirankunda2995$@cluster0.jz3cqod.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("Connected to mongoDB");
}).catch((err) => {
    console.log("Error connecting to mongoDB",err);
})

app.listen(port,() => {
    console.log("Serve is running on port 8000"); 
})



//endpoint to register in the app 