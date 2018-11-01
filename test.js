// const mongoose = require('mongoose')

// const Project = require('./database/models/Project')



// mongoose.connect('mongodb://localhost/test-db')


////////////////////////////////CREATE METHOD////////////////////////////

// Project.create({
//     name: "test name 2",
//     description: "description 2",
//     client:"Test Client 2",
//     employees:"Test Employee 2",
//     cost: 2000,
//     status: "cancelled",
// }, (err, project)=>{
//     console.log(err,project)
// })


///////////////////////////////READ METHOD///////////////////////////////////

// Project.find({
//     name: "test name 2"
// },(err,project)=>{
//     console.log(err,project)
// })


//////////////////////////////READ BY ID//////////////////////////////////

// Project.findById("5bda25babc5fca262486835e", (err, project) => {
//     console.log(err, project)
// })



////////////////////////////READ ALL//////////////////////////////////

// Project.find({}, (err, project) => {
//     console.log(err, project)
// })


//////////////////////UPDATE BY ID//////////////////////////

// Project.findByIdAndUpdate("5bda25babc5fca262486835e",{
//     name: "TEST NAME 2"
// }, (err,project)=>{
//     console.log(err,project)
// })