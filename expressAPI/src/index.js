const express = require('express')
const app = express()
const PORT = 3999
const db = require('./db')
const middleware = require('./middleware')
const route = require('./apis/routes')
//init route

middleware(app)
route(app)
db.connect()

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`this app is listen to ${PORT} port!`)
})