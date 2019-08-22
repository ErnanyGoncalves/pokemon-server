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
    newPokemon.add()
        .then(result => {
            console.log(result.ops[0].name + " added!");
        })
        .catch(err => {
            console.log(err);
        });
    res.send('OK');
}

// Criar postEditPokemon
// Criar postDeletePokemon