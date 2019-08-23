const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();


router.post('/add/pokemon', adminController.postAddPokemon);
router.post('/remove/pokemon/:number', adminController.postRemovePokemon);
router.get('/edit/pokemon/:number', adminController.getEditPokemon);
router.post('/edit/pokemon/:number', adminController.postEditPokemon);



module.exports = router;
