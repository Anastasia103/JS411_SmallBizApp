import React from 'react'
import { AppBar, Toolbar,
  Typography
} from '@mui/material'
import cookie from "cookie";
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    const handleLogout= () => {
        document.cookie = cookie.serialize("loggedIn", null, {
            maxAge: 0,
          });
        props.isLoggedIn(true)  ;
    }

    let usersName= document.cookie.split("=")
    return (
        <AppBar position="relative" sx={{
            "backgroundColor": "#3eb374"
          }}>
            <Toolbar className="AppBar">
                <Typography variant="h6">
                    Austin Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link className="linkName" to="/">Listing</Link>
                    </li>
                    {!props.loggedIn && <li className="nav-list-item">
                        <Link className="linkName" to="/signIn">Login</Link>
                    </li>}
                    {props.loggedIn && <li className="nav-list-item">
                    <Link className="linkName" to="/newbusiness">Add</Link>
                    </li>}
                    {props.loggedIn && <li className="nav-list-item">
                    <Link className="linkName" onClick={handleLogout}>LOGOUT</Link>
                    </li>}
                </ul>
            </Toolbar>
            {props.loggedIn && <h4 className="logged-in">Logged in as {usersName[2]} </h4>}
        </AppBar>
    )
}

export default Navigation
