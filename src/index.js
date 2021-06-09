const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/users', userRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT)