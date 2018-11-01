const Project = require('../database/models/Project')

module.exports = async (req,res)=>{

    const project = await Project.findById(req.params.id)
    res.render('projects', {
        project
    })

}