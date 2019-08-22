const express = require("express");

const userController = require('../controllers/user');

const router = express.Router();

router.get('/pokemon', userController.getPokemons);

router.get('/pokemon/:number', userController.getPokemon);


module.exports = router;