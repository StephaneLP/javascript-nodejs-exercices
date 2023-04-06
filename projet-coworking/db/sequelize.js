const {Sequelize, DataTypes} = require('sequelize')
const mockCoworkings = require('../db/mock-coworkings')

const sequelize = new Sequelize('lapiscine_coworking', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
})

const CoworkingModel = require('../models/coworkingModel')(sequelize, DataTypes)

const initDb = () => {
    sequelize.sync({ force: true })
        .then(() => {
            mockCoworkings.forEach((el) => {
                CoworkingModel.create({
                    name: el.name,
                    price: el.price,
                    address: el.address,
                    picture: el.picture,
                    superficy: el.superficy,
                    capacity: el.capacity,
                })
            })
        })
        .catch(error => {console.error(`Erreur iniDb  ${error}`)})    
}

sequelize.authenticate()
    .then(() => console.log("La connexion à la BDD a bien été établie"))
    .catch(error => console.error(`Impossible de se connecter à la BDD ${error}`))

module.exports = { sequelize, CoworkingModel, initDb }