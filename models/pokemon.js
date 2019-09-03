const getDB = require('../util/database').getDB;

class Pokemon {
    constructor(number, name, imageURL, regionName, type, isLegendary, evolution) {
        this.number = number;
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
        const db = getDB();
        return db.collection("pokemons").findOneAndUpdate({ number: parseInt(pokemonNumber) }, { $set: this }) // this se refere a classe Pokemon
            .then(result => {
                console.log("Pokémon updated!");
                return result;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static remove(pokemonNumber) {
        const db = getDB();
        return db.collection("pokemons").findOneAndDelete({ number: parseInt(pokemonNumber) })
            .then(result => {
                console.log(result.value._id + " - " + result.value.name + " removed!");
                return result;
            })
            .catch(err => {
                console.log(err);
            });
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
        return db.collection("pokemons").findOne({ "number": parseInt(pokemonNumber) })
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