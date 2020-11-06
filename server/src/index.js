const express = require('express')
require('dotenv').config()
require('./db/mongoose')
const cors = require('cors')
const oauthRoute = require('./routes/oauth-route')

const port = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

app.use(oauthRoute)

app.listen(port, () => {
    console.log(`server upon running in ${port}`)
})