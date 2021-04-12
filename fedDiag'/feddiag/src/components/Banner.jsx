import React from 'react';
import logo from './logo.png';
import './Banner.css';

function Banner () {
    return(
        <div className="banner alert d-flex align-items-center" role="alert">
            <img src={logo} alt="logo" className="mr-2" width="35px" height="27px"/> 
            <p className="align-self-center text-white"><b>Fed</b>Diag'</p>
        </div>
       
    );
}

export default Banner;