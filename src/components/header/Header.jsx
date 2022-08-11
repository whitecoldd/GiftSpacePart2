import React from 'react'
import "./header.css";

import Logo from "../../assets/img/Logo.png";

export default function Header() {

    

    return (
        <header className="header">
            <div className="header_w">
                <div className="header_logo">
                    <img src={Logo} alt=""/>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#"><span>Multiply Gift</span></a></li>
                        <li><a href="#"><span>How it works?</span></a></li>
                        <li><a href="#"><span>Exchange History</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
