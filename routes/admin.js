const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get('/add/pokemon',(req,res,next)=>{
    console.log('Teste GET!');
});

router.post('/add/pokemon', adminController.postAddPokemon);  //adminController.postAddPokemon está com o req,res,next que é visto no GET

module.exports = router;
