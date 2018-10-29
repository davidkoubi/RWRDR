const mongoose = require('mongoose')



const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project