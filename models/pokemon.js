const getDB = require('../util/database').getDB;

class Pokemon {
    constructor(number, name, imageURL, regionName, type, isLegendary, evolution) {
        this._id = number;
        this.name = name;
        this.imageURL = imageURL;
        this.regionName = regionName;
        this.type = type;
        this.isLegendary = isLegendary;
        this.evolution = evolution;
    }
    
    add() {
        const db = getDB();
        return db.collection("pokemons").insertOne(this)
            .then(result => {
                console.log('Pokémon added!');
                return result;
            })
            .catch(err => {
                console.log(err)
            });
    }

    edit(pokemonNumber) {
        //TODO
    }

    delete(pokemonNumber) {
        //TODO
    }

    static getAll() {
        const db = getDB();
        return db.collection("pokemons").find().toArray()
            .then(result => {
                // console.log(result);
                return result;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static getOne(pokemonNumber) {
        const db = getDB();
        return db.collection("pokemons").findOne({ "_id": parseInt(pokemonNumber) })
            .then(result => {
                // console.log(result);
                return result;
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Pokemon;