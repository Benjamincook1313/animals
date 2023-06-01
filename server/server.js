const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const {PORT} = process.env;

const { getAnimals, addAnimal } = require("./ctrl");

app.get("/animals", getAnimals);

app.post("/animal", addAnimal);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));