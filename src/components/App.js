import React from 'react'
import {Router, Route} from 'react-router'
import { ToastContainer } from 'react-toastify'
import { Container } from 'semantic-ui-react'
import history from '../history'
import Dashboard from './Dashboard'
import Home from './Home'
import Incomplete from './Incomplete'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import Profile from './Profile'

export default function App() {
    return(
    <>
    <ToastContainer position='bottom-right' hideProgressBar />
    <Router history={history} >
        <Container>
        <Route path='/' exact component={Login}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
        <PrivateRoute path='/dashboard/home' component={Home}/>
        <PrivateRoute path='/dashboard/profile' component={Profile}/>
        <PrivateRoute path='/incomplete' component={Incomplete}/>
        </Container>
    </Router>
    </>
    )
}