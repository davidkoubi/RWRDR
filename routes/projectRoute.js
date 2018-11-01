module.exports = (app) => {
    const project = require('../controllers/project.controller');
    const storeProject = require('../middleware/storeProject')

    app.get('/projects/new', project.newProject) // <-- can't pipe auth

    app.post('/projects/store', storeProject, project.storeProject)

    app.get('/projects/:id', project.getProject)
}
