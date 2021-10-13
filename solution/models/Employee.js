const mongoose = require('mongoose')


const EmployeeSchema  = new mongoose.Schema({

    firstName: {
        type: String,
        min: 1,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }

})

module.exports = mongoose.model('Employee', EmployeeSchema)
