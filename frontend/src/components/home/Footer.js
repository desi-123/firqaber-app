import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
    <hr />
      <p>
        <Link to="/" className="home-link">
          Home
        </Link>{' '}
        <Link to="/about" className="about-link">
          About us
        </Link>{' '}
        <Link to="/term" className="term-link">
          Terms
        </Link>
      </p>
    </footer>
  )
}

export default Footer
