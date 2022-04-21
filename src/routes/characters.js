const express = require('express');
const { getCharacters } = require('../controllers/characters');
const router = express.Router();

router.get('/', async (req, res) => {
    const apiCharacters = await getCharacters();
    res.send(apiCharacters);
});
module.exports = router;