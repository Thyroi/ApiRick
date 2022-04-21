const axios = require('axios');
const Character = require('../db.js');

module.exports = {
    getCharacters: async () => {
        try{
            const apiCharacters = await axios.get('https://rickandmortyapi.com/api/character');
            const characters = apiCharacters.data.results;
            return characters;
        }catch(err){
            console.log(err);
            return 500;
        }
        
    },
    createCharacter: async (info) => {
        try{
            const {name, status, image} = info;
            const newCharacterDB = await Character.create({
                name, 
                status, 
                image
            });
            return newCharacterDB;
        }catch(err){
            console.log(err);
            return 500;
        }
    }

}