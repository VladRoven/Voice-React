import React from 'react';
import '../assets/styles/Input.module.scss';

const Input = ({ type, placeholder, ...props }) => {
    return (
        <input type={ type } placeholder={ placeholder } />
    );
};

export default Input;
