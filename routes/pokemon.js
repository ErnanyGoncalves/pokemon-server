const express = require("express");

const router = express.Router();

router.get('/pokemon',(req,res,next)=>{
    console.log('Lista de pokémons!');
});

router.get('/pokemon/:id',(req,res,next)=>{
    console.log('Pokémon específico!');
}); 

module.exports = router;