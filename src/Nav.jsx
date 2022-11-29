import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <div> </div>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Nav
