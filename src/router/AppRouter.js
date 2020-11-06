import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'

const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
                <Home />
                <Switch>
                    <Route path='/' component={Login} exact={true} />
                    <Route path='/dashboard' component={Dashboard} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter