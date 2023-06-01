const animals = require("./db.json")
const Sequelize = require("sequelize");
require("dotenv").config();

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
      ssl: {
          rejectUnauthorized: false
      }
  }
})

module.exports = {
  getAnimals: (req, res) => {
    sequelize.query(`
      SELECT * FROM animals;
    `).then(dbRes => {
      res.status(200).send(dbRes[0]);
    })
  },
  addAnimal: (req, res) => {
    // console.log("hit add animals");
    const { name, species, color, age, size } = req.body;

    sequelize.query(`
      INSERT INTO animals(name, color, age, species, size)
      VALUES('${name}', '${color}', ${age}, '${species}', '${size}');

      SELECT *
      FROM animals;
    `).then(dbRes => res.status(200).send(dbRes[0])).catch(err => console.log(err));

  }
}