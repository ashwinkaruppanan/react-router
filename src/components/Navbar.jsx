import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();
  return (
    <nav>
      <div className="right">
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/about">About</Link>
      </div>
      <div className="left">
        
        <button className='loginButton' onClick={() => navigate('login')}>Log In</button>
        <button className='registerButton' onClick={() => navigate("register")}>Register</button>
      </div>
    </nav>
  )
}
