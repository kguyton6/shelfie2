require('dotenv').config()
const massive = require('massive')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const ctrl = require('./controller')

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.get('/api/inventory', ctrl.getAll)
app.get('/api/inventory/:id', ctrl.getOne)
// app.put('/api/inventory/:id?desc')
// app.post('/api/inventory')
// app.delete('/api/inventory/:id')

const PORT = process.env.PORT || 3300
app.listen(PORT, () => {console.log(`server is listening${PORT}`)})