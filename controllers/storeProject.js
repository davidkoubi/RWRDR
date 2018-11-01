const Project = require('../database/models/Project')
const path = require('path')


module.exports = (req,res)=>{

    const { image } = req.files

    image.mv(path.resolve(__dirname, '..','public/projects', image.name), (err) => {
        Project.create({
            ...req.body,
            image: `/projects/${image.name}`
        }, (err, project) => {
        res.redirect('/')
        })
    })
}