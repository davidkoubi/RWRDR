const User = require('../database/models/User')
const bcrypt = require('bcrypt')

//login.js
exports.login = (req, res) => {
    res.render('login')
}

//loginUser.js
exports.loginUser = (req, res) => {

    const {
        email,
        password
    } = req.body

    User.findOne({
        email
    }, (err, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, match) => {
                if (match) {

                    req.session.userId = user._id

                    res.redirect('/')

                } else {
                    res.redirect('/auth/login')
                }
            })
        } else {
            return res.redirect('/auth/login')
        }
    })

}


//newUser
exports.newUser = (req, res) => {


    res.render('register')
}

//storeUser
exports.storeUser = (req, res) => {

    res.render('register')
}


//logout

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('')
    })
}