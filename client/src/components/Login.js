import React from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import Cookies from 'universal-cookie'

const Login = (props) => {

    const clientId = '1001887062555-9vg96jssvijl2u70p4vvd5fgqq8g15rk.apps.googleusercontent.com'

    const successResponse = (res) => {
        axios.post('http://localhost:8080/api/google-signin', { token: res.tokenId }).then((res) => {
            let cookie = new Cookies()
            cookie.set('jwt', res.data.jwt, { path: '/' })
            props.history.push('/dashboard')
        }).catch((error) => {

        })
    }

    const failureResponse = (res) => {
        console.log(res)
    }

    return(
        <div>
            <GoogleLogin 
                clientId={clientId}
                onSuccess={successResponse}
                onFailure={failureResponse}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default Login