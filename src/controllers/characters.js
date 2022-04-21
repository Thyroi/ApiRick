const axios = require('axios');

module.exports = {
    getCharacters: async (req, res) => {
        try{
            const apiCharacters = await axios.get('https://rickandmortyapi.com/api/character');
            const characters = apiCharacters.data.results;
            return characters;
        }catch(err){
            console.log(err);
        }
        
    }

}