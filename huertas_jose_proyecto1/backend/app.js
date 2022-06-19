require("dotenv").config();
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

const CACHE = {};

app.use(cors());

app.get("/cache", async function (req, res) {
  res.json({ data: CACHE });
});

app.post("/pokemon/:name", async function (req, res) {
  const { name } = req.params;
  if (CACHE[name]) {
    return res.json({ data: CACHE[name], isCached: true });
  }
  let responseData;
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    const { id } = data;

    const [location, species] = await Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`),

      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`),
    ]);

    const { evolution_chain } = species.data;

    const responseEvosChain = await axios.get(evolution_chain.url);

    const { chain } = responseEvosChain.data;

    data.evos_chain = getArrEvolutionChain(chain);

    data.locations_areas = location.data;

    responseData = data;
  } catch (error) {
    console.log(error);

    responseData = { error: error.toString(), name };
  }

  CACHE[name] = responseData;

  res.json({ data: responseData, isCached: false });
});

app.listen(PORT, () => {
  console.log(`El servidor está ejecutando en el puerto ${PORT}.`);
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
