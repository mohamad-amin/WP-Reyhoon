import React from 'react'

import '../../assets/styles/header.css'
import img_logo from '../../assets/images/logo.svg'

function Header() {
    return (
        <div className="header">
            <div className="header-layout">
                <div className="account-layout">
                    <div><a href="login.html">ورود</a></div>
                    <span className="account-splitter"></span>
                    <div><a href="register.html">عضویت</a></div>
                </div>
                <div>
                    <a href="#">راهنما</a>
                </div>
                <div className="header-icon-layout">
                    <img className="header-icon" src={img_logo} alt="REYHOON"/>
                </div>
            </div>
        </div>
    )
}

export default Header