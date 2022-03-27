const express = require('express')
const server = express()
const routes = require('./routes')
server.set('view engine', 'ejs')

// O servidor vai da a porta da nuvem
const port = process.env.PORT || 3000

server.use(routes)

server.use(express.static('public'))

server.listen(port, () => console.log('rodando o servido'))
