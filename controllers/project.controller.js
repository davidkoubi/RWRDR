const Project = require('../database/models/Project')
const path = require('path')


//getProject
exports.getProject = async (req, res) => {

    const project = await Project.findById(req.params.id)
    res.render('projects', {
        project
    })

}

//newProject
exports.newProject = (req, res) => {

    if (req.session.userId) {
        return res.render('newProject')
    }
    res.redirect('/auth/login')

}

//storeProject
exports.storeProject = (req, res) => {

    const {
        image
    } = req.files

    image.mv(path.resolve(__dirname, '..', 'public/projects', image.name), (err) => {
        Project.create({
            ...req.body,
            image: `/projects/${image.name}`
        }, (err, project) => {
            res.redirect('/')
        })
    })
}