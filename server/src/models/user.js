const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userModel = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    }
})

userModel.methods.generateAuthToken = function () {
    const user = this
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
    return token
}

const User = mongoose.model('User', userModel)

module.exports = User