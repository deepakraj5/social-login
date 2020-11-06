import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
import { GoogleLogout } from 'react-google-login'
import axios from 'axios'

const Dashboard = (props) => {

    const clientId = '1001887062555-9vg96jssvijl2u70p4vvd5fgqq8g15rk.apps.googleusercontent.com'

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')

    useEffect(() => {
        let cookie = new Cookies()
        let jwt = cookie.get('jwt')
        if(!jwt) {
            props.history.push('/')
        }
        axios.get('http://localhost:3001/profile', { headers: {
            Authorization: 'Bearer ' + jwt
        }}).then((res) => {
            setName(res.data.name)
            setEmail(res.data.email)
        }).catch((e) => {

        })
    })

    const googleLogout = (res) => {
        let cookie = new Cookies()
        cookie.remove('jwt')
        props.history.push('/')
    }

    return(
        <div>
            <h4>Dashboard</h4>
            <p>Name : {name}</p>
            <p>Gmail: {email}</p>
            <GoogleLogout
                // buttonText="Logout"
                clientId={clientId}
                onLogoutSuccess={googleLogout}
            >
            </GoogleLogout>
        </div>
    );
}

export default Dashboard