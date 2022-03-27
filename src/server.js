const express = require('express')
const server = express()
const routes = require('./routes')
const product = require("./api/product")
server.set('view engine', 'ejs')

server.use(routes)

server.use(express.static('public'))

server.listen(8000, () => console.log('rodando o servido'))
