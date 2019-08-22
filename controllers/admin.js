const Pokemon = require('../models/pokemon');

exports.postAddPokemon = (req, res, next) => {
    const number = req.body.number;
    const name = req.body.name;
    const imageURL = req.body.imageURL;
    const regionName = req.body.regionName;
    const type = req.body.type;
    const isLegendary = req.body.isLegendary;
    const evolution = req.body.evolution;

    const newPokemon = new Pokemon(number, name, imageURL, regionName, type, isLegendary, evolution);
    console.log(newPokemon);
    newPokemon.save();
    res.send('OK');
}