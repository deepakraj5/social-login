const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client('1001887062555-9vg96jssvijl2u70p4vvd5fgqq8g15rk.apps.googleusercontent.com')

const googleAuth = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: '1001887062555-9vg96jssvijl2u70p4vvd5fgqq8g15rk.apps.googleusercontent.com'
    })
    const payload = ticket.getPayload()
    const { email, name } = payload

    return {
        email,
        name
    }
}

module.exports = googleAuth