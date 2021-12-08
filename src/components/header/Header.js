import React from 'react'
import './Header.css'
import Logo from '../app_screenshot.png'

const Header = () => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  )
}

export default Header
