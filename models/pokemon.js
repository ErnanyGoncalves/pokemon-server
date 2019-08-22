const getDb = require('../util/database').getDB;

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

    save() { // Inserção somente ( por atualização dps )
        const db = getDb();
        db.collection("pokemons").insertOne(this)
            .then(result => {
                console.log('Pokémon Added!');
            })
            .catch(err => {
                console.log(err)
            });
    }

    static getAll() {
        const db = getDb();
        db.collection("pokemons").find().toArray()
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Pokemon;