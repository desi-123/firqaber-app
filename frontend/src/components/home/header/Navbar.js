import React from 'react'
import Login from './Login'
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <a href="/">
          <img className="logo-image" src="./images/favicon.png" alt="logo" />
        </a>
      </div>
      <div className="nav__login">
        <Login />
      </div>
    </nav>
  )
}

export default Navbar
