const express = require('express')
// const path = require('path') //allows for the path.resolve method 
const expressEdge = require('express-edge')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const bodyParser=require('body-parser')

app.use(express.static('public'))
app.use(expressEdge)
app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const Project = require('./database/models/Project')

mongoose.connect('mongodb://127.0.0.1:27017/rwrdr')

app.get('/', async (req,res)=>{

const myProjects = await Project.find({ })
    console.log(myProjects)
    res.render('index', {
        myProjects
    })
})

app.post('/projects/store',(req, res)=>{
    console.log(req.body)
    res.redirect('/')

})

app.get('/about', (req,res)=>{
    res.render('about')
})

app.get('/404', (req, res) => {
    res.render('404')
})

app.get('/projects', (req, res) => {
    res.render('projects')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/new-project', (req, res) => {
    res.render('new-project')
})

app.listen(3000, ()=>{
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