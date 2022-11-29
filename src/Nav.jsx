import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='header-head'>
      <img src="https://www.pngfind.com/pngs/m/0-986_free-icons-png-youtube-logo-3d-transparent-png.png" style={{height:"60px"}} id="tube-icon"></img><h1 id='head-title'>Kendon's YouTube</h1>
      <Link  id="Home" to="/">Home</Link>
      <Link id="About" to="/about">About</Link>
      
    </header>
  )
}

export default Nav
