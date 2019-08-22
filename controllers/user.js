const Pokemon = require('../models/pokemon');

exports.getPokemons = (req, res, next) => {
    console.log('Pokémons Cadastrados:');
    Pokemon.getAll()
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getPokemon = (req,res,next) =>{
    console.log("Pokémon:");
    Pokemon.getOne(req.params.number)
    .then(result=>{
        console.log(result);
        res.json(result);
    })
    .catch(err=>{
        console.log(err);
    });
}

// Função adicionar favoritos
// Função remover favoritos