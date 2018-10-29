const mongoose = require('mongoose')

const Project = require('./database/models/Project')

mongoose.connect('mongodb://localhost/test-rwrdr')



// Project.find({
//     title: 'Ozymandias'
// },(error,projects)=>{
//     console.log(error,projects)
// })

// Project.findById("5bd62e4bba7fad2acc3551689", (error, project) => {
//     console.log(error, project)
// })

// Project.create({
//     title: 'Ozymandias',
//     description: 'Lorem Ipsum description',
//     content: 'Look upon my work ye mighty and despair'
// }, (error, project)=>{
// console.log(error, project)
// })

Project.findByIdAndUpdate("5bd62e4bba7fad2acc355169", {
    title: "Heisenberg"

},(err, project) => {

    console.log(err,project)
})