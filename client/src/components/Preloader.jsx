import React from 'react';
import Style from '../assets/styles/Preloader.module.scss';
import Logo from './Logo';

const Preloader = () => {
    return (
        <div className={ Style.preloader }>
            <Logo size={ 250 } />
        </div>
    );
};

export default Preloader;
