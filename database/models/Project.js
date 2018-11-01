const mongoose = require('mongoose')


const ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    client: String,
    employees: String,
    cost: Number,
    status: String,
    image: String,
    // attachment: String,
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project