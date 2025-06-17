const express = require("express");
const app = express(); 
const db = require('./db'); 
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT | 3000;

app.get('/', (req, res) => {
  res.send('welcome to my learning ')
});

const personsRouts = require('./routs/personsRouts');
const menuRoutes = require('./routs/menuRouts');
app.use('/person',personsRouts);
app.use('/menu',menuRoutes);

app.listen(PORT,()=>{
    console.log("\n\nlistening on port number 3000");
})