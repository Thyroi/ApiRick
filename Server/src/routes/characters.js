const express = require('express');
const { getCharacters, createCharacter } = require('../controllers/characters');
const router = express.Router();
const { Character} = require('../db.js');

router.get('/', async (req, res) => {
    const apiCharacters = await getCharacters();
    if (apiCharacters !== 500) {
        return res.status(200).json(apiCharacters);
    } else {
        return res.status(404).json("todo se fue alv");
    }
});
router.post('/new', async (req, res) => {
    try{
        const {name, state, image} = req.body;
        const newCharacterDB = await Character.create({
            name, 
            status: state, 
            image
        });
        return res.status(200).json(newCharacterDB);
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
});
module.exports = router;