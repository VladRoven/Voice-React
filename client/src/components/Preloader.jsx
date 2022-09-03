import React from 'react';
import Style from '../assets/styles/Preloader.module.scss';

const Preloader = () => {
    return (
        <div className={ Style.preloader }>
            <div className={ Style.circle }>
                <p>V</p>
            </div>
        </div>
    );
};

export default Preloader;
