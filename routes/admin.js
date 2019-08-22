const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();


router.post('/add/pokemon', adminController.postAddPokemon);

// Criar rota post /edit/pokemon/:number 
// Criar rota post /delete/pokemon/:number 

module.exports = router;
