import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Menu } from 'semantic-ui-react'
import { signOut } from '../actions'
import history from '../history'

export default function Imcomplete() {

    const {loginData} = useSelector(state => state.login)

    const dispatch = useDispatch()

    const handleSingOut = () => {
        dispatch(signOut())
        history.push('/')
    }

    return(
        <Container>
        <Menu secondary>
        <Menu.Item position="right">
            <Button onClick={handleSingOut} content="Log out" negative/>
        </Menu.Item>
        </Menu>
        <Container text>There is a problem with your account: 
        <p style={{'color':'red'}}>{loginData.user.status}</p></Container>
        </Container>
        )
}