import React from 'react';
import logo from '../../assets/images/logo_sw.png'
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
          <Link to="/">
              <img src={logo} alt="Logo" className="logo"/>
          </Link>
        </div>
    );
};

export default Header;