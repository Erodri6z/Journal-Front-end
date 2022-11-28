import { Link } from 'react-router-dom'
import React from 'react'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li id='username'>Welcome, {user.name}</li>
            <li><Link className='nav-item' to="/profiles">Profiles</Link></li>
            <li><Link className='nav-item' to="/new-entry">Vent</Link></li>
            <li><Link className='nav-item' to="/journal">Journal</Link></li>
            <li><Link className='nav-item' to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link className='nav-item' to="/changePassword">Change Password</Link></li>
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
