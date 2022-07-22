const express = require('express');
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");
const Photo = require('./models/Photo');

const app = express();

mongoose.connect(`mongodb://localhost:${port}/pcat-db-test`, {
  useNewUrlParser:true,
  useunifiedTopology:true,
});

const port = 3000;
// TEMPLATE ENGİNE
app.set("view engine","ejs");

// MIDDLEWARES
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// ROUTES
app.get("/", (req,res) => {
    res.render("index") //(index = index.ejs)
})

app.get("/about", (req,res) => {
  res.render("about") //(index = index.ejs)
})

app.get("/add", (req,res) => {
  res.render("add") //(index = index.ejs)
})

app.post("/photos", (req,res) => {
  console.log(req.body)
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`server created at ${port}`);
});

