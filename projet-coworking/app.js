const express = require('express')
const morgan = require('morgan')
const serveFavicon = require('serve-favicon')
const sequelize = require('./db/sequelize')
const coworkingRouter = require('./routes/coworkingRoutes')
const app = express()
const port = 3000

app
    .use(morgan('dev'))
    .use(serveFavicon(__dirname + '/favicon.png'))
    .use(express.json())
    .use('/api/coworking', coworkingRouter)
    .listen(port, () => {
        console.log(`L'app sur le port ${port}`)
    })  

sequelize.initDb()