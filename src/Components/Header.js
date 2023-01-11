import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from "../assets/logo.png"

function Header() {
  return (
    <nav className='nav-list'>
        <div className='logo-section'>
            <img src={logo} alt="Logo" />
            <h1>ChinaBar</h1>
        </div>
        <div className='nav-items'>
            <button className='list'><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></button>
            <button className='list'><Link to='/delivery' style={{ textDecoration: 'none', color: 'white' }}>Delivery</Link></button>
            <button className='list'><Link to='/items' style={{ textDecoration: 'none', color: 'white' }}>Items</Link></button>
        </div>
        <button className='btn-signup'>SIGN UP</button>
    </nav>
  )
}

export default Header