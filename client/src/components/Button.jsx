import React from 'react';
import Style from '../assets/styles/Button.module.scss';

const Button = ({ children, ...props }) => {
    return (
        <button className={ Style.voiceButton } { ...props }>{ children }</button>
    );
};

export default Button;
