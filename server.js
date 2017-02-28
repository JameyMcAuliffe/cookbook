'use strict'

const express = require('express')
let bodyParser = require('body-parser')
const path = require('path')
//const { Server } = require('http')

const app = express()

const port = process.env.PORT || 3000
app.set('port', port)


//View Engine
//sets view engine to ejs
app.set('view engine', 'ejs')
//specifies folder for views
app.set('views', path.join(__dirname, 'views'))

//Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.render('index', {
  	title: 'Grubalubbin'
  })
})



app.listen(app.get('port'), () => {
	console.log(`Express server listening on port ${port}`)
})


