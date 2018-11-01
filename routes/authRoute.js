module.exports = (app) => {
    const auth = require('../controllers/auth.controller');
    const redirectIfAuthenticated = require('../middleware/redirectIfAuthenticated')

    app.get('/auth/register', redirectIfAuthenticated, auth.newUser)

    app.post('/users/register', redirectIfAuthenticated, auth.storeUser)

    app.get('/auth/login', redirectIfAuthenticated, auth.login)

    app.post('/users/login', redirectIfAuthenticated, auth.loginUser)

    app.get('/auth/logout', auth.logout)
}
