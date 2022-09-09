import React from 'react';
import Style from '../assets/styles/Logo.module.scss';

const Logo = ({ size }) => {
    const circleSize = {
        width: size,
        height: size
    };
    const fontSize = {
        fontSize: parseInt(size / 0.95)
    };
    
    return (
        <div className={ Style.logo } style={ circleSize }>
            <p style={ fontSize }>V</p>
        </div>
    );
};

export default Logo;
