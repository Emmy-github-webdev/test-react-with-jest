import React from 'react'
import './Header.css'
import Logo from '../app_screenshot.png'

const Header = () => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  )
}

export default Header
