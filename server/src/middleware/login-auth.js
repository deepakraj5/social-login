const jwt = require('jsonwebtoken')
const User = require('../models/user')

const loginAuth = async (req, res, next) => {
    try {
        const token = await req.header('Authorization').replace('Bearer ', '')
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        if(!verifyToken) {
            throw new Error()
        }
        const user = await User.findOne({ _id: verifyToken._id })
        if(!user) {
            throw new Error()
        }

        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Unauthorized' })
    }
}

module.exports = loginAuth