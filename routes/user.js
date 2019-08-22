const express = require("express");

const userController = require('../controllers/user');

const router = express.Router();

router.get('/pokemon',userController.getPokemons);

router.get('/pokemon/:id',(req,res,next)=>{
    console.log('Pokémon específico!');
}); 

module.exports = router;