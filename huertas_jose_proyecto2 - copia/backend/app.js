require("dotenv").config();
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
const app = express();
const { dbConnection } = require('./DB/config');
const Pokemon = require("./models/poke");

const PORT = process.env.PORT || 3000;

const CACHE = {};
let delta = 10 * 1000;

app.use(cors());

app.get("/cache", async function (req, res) {
  res.json({ data: CACHE });
});

app.post("/pokemon/:name", async function (req, res) {
  const { name } = req.params;
  const now = new Date();
 const pokemonDB = await Pokemon.findOne({ name });
    if (pokemonDB) {
        const { cachedAt } = pokemonDB
        if ((now - cachedAt >= delta)) {
            await Pokemon.findOneAndDelete({ name })
        } else {
            return res.json({ data: pokemonDB, isCached: true });
        }
    }
 
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    const { id } = data;

    const [location, species] = await Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`),

      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`),
    ]);

    console.log(location.data);

    const { evolution_chain } = species.data;

    const responseEvosChain = await axios.get(evolution_chain.url);

    const { chain } = responseEvosChain.data;

    data.evos_chain = getArrEvolutionChain(chain);

    data.location_areas = location.data;
    data.cachedAt = new Date();

    
    const pokemon = new Pokemon(data);
    await pokemon.save();
    res.status(200).json({ data: pokemon, isCached: false });
  } catch (error) {
    console.log(error);
    res.status(400).json({ data: error.toString(), name });
  }



  
});

dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Iniciando en el puerto: ${PORT}`);
  });
}).catch((error) => {
  console.error({ error });
});

const getArrEvolutionChain = ({ species, is_baby, evolves_to }) => {
  let stack = [];

  stack.push({ name: species.name, is_baby: is_baby });

  while (evolves_to.length > 0) {
    if (evolves_to.length > 1) {
      evolves_to.forEach(({ species, is_baby }) => {
        stack.push({ name: species.name, is_baby: is_baby });
      });
    } else {
      stack.push({
        name: evolves_to[0].species.name,
        is_baby: evolves_to[0].is_baby,
      });
    }

    evolves_to = evolves_to[0].evolves_to;
  }

  return stack;
};
