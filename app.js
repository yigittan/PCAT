const express = require('express');
const path = require("path");
const ejs = require("ejs"); 

const app = express();

const port = 3000;
// TEMPLATE ENGİNE
app.set("view engine","ejs");

// MIDDLEWARES
app.use(express.static('public'))

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

app.listen(port, () => {
  console.log(`server created at ${port}`);
});
