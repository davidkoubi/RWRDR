const express = require('express')
const expressEdge = require('express-edge')
const app = new express()
const edge = require('edge.js')
const storeProject = require('./middleware/storeProject')
const port = 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const newProjectController = require('./controllers/newProject')
const homePageController = require('./controllers/homePage')
const storeProjectController = require('./controllers/storeProject')
const getProjectController = require('./controllers/getProject')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const mongoStore = connectMongo(expressSession)
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')
const logoutController = require('./controllers/logout')


const dbConfig = require('./config/dbConfig.js')
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
})


//const auth = require('./middleware/auth')




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

app.use('*', (req, res, next) => {
    edge.global('auth', req.session.userId)

    next()
})

app.get('/', homePageController)

app.get('/auth/register', redirectIfAuthenticated, newUserController)

app.post('/users/register',redirectIfAuthenticated, storeUserController)

app.get('/auth/login', redirectIfAuthenticated, loginController)

app.post('/users/login', redirectIfAuthenticated, loginUserController)

app.get('/projects/new',  newProjectController) // <-- can't pipe auth

app.post('/projects/store',  storeProject, storeProjectController)

app.get('/projects/:id', getProjectController)

app.get('/auth/logout', logoutController)

app.use((req,res)=> res.render('404'))


app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/404', (req, res) => {
    res.render('404')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})



app.listen(3000, () => {
    console.log(`Going Smoothly on port ${port}`)
})

//------------------- second draft --------------------

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'views/layouts/index.edge')) //allows to have the full file path
// })

// app.get('/json', (req, res)=>{
//     res.json({
//         name :"David Koubi",
//         role : "Creator"
//     })
// })

// app.get('/about', (req,res)=>{
//     res.sendFile(path.resolve(__dirname, 'views/layouts/about.edge')) //I don't understand why index.html doesn't need pages but about does
// })

// app.get('/contact', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, 'views/layouts/contact.edge'))
// })

// app.get('/404', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'views/layouts/404.edge'))
// })



//------------------- first draft --------------------

// const http = require('http');
// const port = 3000;
// const hostname = "localhost";
// const fs = require('fs');

// const aboutPage=fs.readFile('about.html');
// const contactPage = fs.readFile('contact.html');
// const errorPage = fs.readFile('404.html');
// const homePage = fs.readFile('index.html');


// const server = http.createServer((req, res) => {
//     console.log(req.url)

//     if(req.url==='/about'){
//         return res.end(aboutPage);
//     } else if(req.url==='/contact'){
//         return res.end(contactPage);
//     }else if (req.url==='/'){
//         return res.end(homePage);
//     }else{
//         res.writeHead(404);
//         res.end(errorPage)
//     }


// });