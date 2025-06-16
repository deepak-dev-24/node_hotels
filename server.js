const express = require("express");
const app = express(); 
const db = require('./db'); 

const bodyParser = require("body-parser");
app.use(bodyParser.json());


const Menu = require('./models/Menu');

app.get('/', (req, res) => {
  res.send('welcome to my learning ')
});

const personsRouts = require('./routs/personsRouts');
const menuRoutes = require('./routs/menuRouts');
app.use('/person',personsRouts);
app.use('/menu',menuRoutes);

app.listen(3000,()=>{
    console.log("\n\nlistening on port number 3000");
})