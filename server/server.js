const express = require('express')
const cors = require('cors')
require('dotenv').config()
const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

const app = express()
let { seed } = require('./seed')
let { questionFunction, userFunction, saveResponse, getSaved } = require('./controller')
const { get } = require('express/lib/response')
app.use(express.json())
app.use(cors())

app.get('/api/question', questionFunction)

app.post('/api/users', userFunction)

app.post('/api/saved', saveResponse)

app.post('/seed', seed)

app.get('/api/savedres', getSaved)

app.listen(process.env.SERVER_PORT, () => 
console.log(`Listening on ${process.env.SERVER_PORT}`))