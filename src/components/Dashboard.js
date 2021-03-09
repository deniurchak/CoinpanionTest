import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'
import { signOut } from '../actions'
import history from '../history'

export default function Dashboard() {

    // const loginData= useSelector(state=> state.login)

    const dispatch = useDispatch()

    const handleSingOut = () => {
        dispatch(signOut())
        history.push('/')
    }

    return(
        <>
        <Menu secondary>
        <Menu.Item as={NavLink} to='/dashboard/home' content="Home"/>
        <Menu.Item as={NavLink} to='/dashboard/profile' content="Profile" />
        <Menu.Item position="right">
            <Button onClick={handleSingOut} content="Log out" negative/>
        </Menu.Item>
        </Menu>
        </>
    )
}