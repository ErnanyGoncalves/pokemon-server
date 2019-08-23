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
            res.send('OK');
        })
        .catch(err => {
            console.log(err);
        });

}

exports.postRemovePokemon = (req, res, next) => {
    Pokemon.remove(req.params.number)
        .then(result => {
            console.log("Removal complete!");
            res.send('OK');
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getEditPokemon = (req,res,next)=>{
    Pokemon.getOne(req.params.number)
    .then(result=>{
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err)
    });
}

exports.postEditPokemon = (req, res, next) => {
    const newNumber = req.body.number;
    const newName = req.body.name;
    const newImageURL = req.body.imageURL;
    const newRegionName = req.body.regionName;
    const newType = req.body.type;
    const newIsLegendary = req.body.isLegendary;
    const newEvolution = req.body.evolution;

    const modifiedPokemon = new Pokemon(newNumber, newName, newImageURL, newRegionName, newType, newIsLegendary, newEvolution);
    console.log(modifiedPokemon);
    modifiedPokemon.edit(req.params.number)
    .then(result=>{
        console.log("Update complete!");
        res.send("OK");
    })
    .catch(err=>{
        console.log(err);
    });
}