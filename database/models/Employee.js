const mongoose = require('mongoose')


const EmployeeSchema = new mongoose.Schema({
    name: String,
    surname: String,
    username: String,
    birth:Date,
    street: String,
    city:String,
    zip: Number,
    role: String
})

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee