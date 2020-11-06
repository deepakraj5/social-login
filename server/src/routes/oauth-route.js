const express = require('express')
const googleAuth = require('../google/google-auth')
const User = require('../models/user')
const loginAuth = require('../middleware/login-auth')

const router = express.Router()

router.post('/google-signin', async (req, res) => {
    try {
        const token = req.body.token
        const profile = await googleAuth(token)
        const checkMail = await User.findOne({ email: profile.email })
        if(!checkMail) {
            const newUser = new User(profile)
            await newUser.save()
        }
        const user = await User.findOne({ email: profile.email })
        const jwt = user.generateAuthToken()

        res.send({ jwt })
    } catch (e) {
        res.status(401).send({ error: 'Unauthorized' })
    }
})

router.get('/profile', loginAuth, async (req, res) => {
    res.send(req.user)
})



module.exports = router