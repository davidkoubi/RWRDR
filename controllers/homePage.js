const Project = require('../database/models/Project')


module.exports= async (req,res)=>{
    const projects = await Project.find({})
    res.render('index', {
        projects
    })
}