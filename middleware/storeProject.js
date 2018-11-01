module.exports = (req, res, next) => {
    if (!req.files.image || !req.projects.name || !req.projects.decription || !req.projects.client || !req.projects.employee || !req.projects.cost) {
        return res.redirect('/projects/new')
    }
    next()
}