import { Link } from 'react-router-dom'
import React from 'react'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
            {/* <Link className='change-password' to="/changePassword">Change Password</Link> */}
          <ul>
            {/* <li id='username'>Welcome, {user.name}</li> */}
            <li><Link className='nav-item' to="/new-entry">Vent</Link></li>
            <li><Link className='nav-item' to="/journal">Journal</Link></li>
            <li>
              <Link className='nav-item' to="" onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                  <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                  <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link className='nav-item' to="/login">Log In</Link></li>
            <li><Link className='nav-item' to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
