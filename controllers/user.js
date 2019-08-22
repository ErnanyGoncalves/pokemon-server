const Pokemon = require('../models/pokemon');

exports.getPokemons = (req, res, next) => {
    console.log('Pokémons Cadastrados!');
    Pokemon.getAll();
}