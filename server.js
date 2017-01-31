'use strict'

const express = require('express')
let bodyParser = require('body-parser')
const path = require('path')
//const { Server } = require('http')

const app = express()

const port = process.env.PORT || 3000
app.set('port', port)

// app.get('/', function (req, res) {
//   res.send('Cookbook')
// })

//View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')))



app.listen(app.get('port'), () => {
	console.log(`Express server listening on port ${port}`)
})


