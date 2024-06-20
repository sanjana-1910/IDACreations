import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <img src={logo} alt='Logo' className='logo' /> */}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/services'>Services</NavLink>
      <NavLink to='/careers'>Careers</NavLink>
      <NavLink to='/contact'>Contact Us</NavLink>
    </div>
  )
}

export default Navbar
