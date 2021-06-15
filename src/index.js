const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes')
const storyRoutes = require('./routes/storyRoutes')

app.use('/', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/users', userRoutes)
app.use('/stories', storyRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('rodando...')
})