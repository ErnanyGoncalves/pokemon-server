const express = require('express');
const bodyParser = require('body-parser');

const pokemonRoutes = require('./routes/pokemon');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(pokemonRoutes);
app.use((req,res,next)=>{
    console.log('Qualquer outra rota!');
});

app.listen(3000, () => {
    console.log('Connected at port 3000!');
});