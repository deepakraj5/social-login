const express = require('express')
require('dotenv').config()
require('./db/mongoose')
const cors = require('cors')
const path = require('path')
const oauthRoute = require('./routes/oauth-route')

const port = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', oauthRoute)

app.use(express.static('../build'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../', 'build', 'index.html'))
})

app.listen(port, () => {
    console.log(`server upon running in ${port}`)
})