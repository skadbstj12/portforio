import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
    <Link to="#">  <h1>developer <span>portfolio</span></h1></Link>
      <Link to="# "><nav>menu<span>click</span></nav></Link>
  </header>
  )
}

export default Header
