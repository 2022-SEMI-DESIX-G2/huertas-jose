const { Schema, model } = require('mongoose');
const PokemonSchema = Schema({
    name: {
        type: String,
    },
    abilities: {
        type: Array,
    },
    id: {
        type: Number,
    },
    sprites: {
        type: Object,
    },
    location_areas: {
        type: Array,
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    evos_chain: {
        type: Array,
    },
    cachedAt: {
        type: Date,
    }
});
module.exports = model('Pokemon', PokemonSchema);