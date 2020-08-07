import React from 'react' 
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import './header.css'

const Header = () => {
    return(
        <div className = "ui secondary pointing menu">
            <div className = "ionic-logo ">  
            </div>

                <Link to = "/" className = "item streamy_title">
                  Streamy
                </Link>
                <div className = "right menu" >
                <Link to = "/" className = "item" style = {{ right: '310px ', position: 'absolute'}}>
                 All Streams
                </Link>
                <GoogleAuth />

            </div>  
        </div>      
    );
};

export default Header;