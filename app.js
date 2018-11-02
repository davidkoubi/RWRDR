const express = require('express')
const expressEdge = require('express-edge')
const app = express()
const edge = require('edge.js')
const port = 3000
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const homePageController = require('./controllers/homePage')
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const mongoStore = connectMongo(expressSession)

const dbConfig = require('./config/dbConfig.js')
const mongoose = require('mongoose')

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
})


app.use(fileUpload())
app.use(express.static('public'))
app.use(expressEdge)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(expressSession({
    secret:'secret',
    store:new mongoStore({
        mongooseConnection:mongoose.connection
    })
}))

app.set('views', `${__dirname}/views`)

require('./routes/projectRoute')(app)
require('./routes/authRoute')(app)

app.use('*', (req, res, next) => {
    edge.global('auth', req.session.userId)

    next()
})

app.get('/', homePageController)

app.use((req,res)=> res.render('404'))


app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/404', (req, res) => {
    res.render('404')
})


app.listen(3000, () => {
    console.log(`Going Smoothly on port ${port}`)
})