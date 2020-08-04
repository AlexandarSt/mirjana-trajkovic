import React from 'react';
import logo from '../../assets/crown.svg';

import './footer.styles.scss';

const Footer = () => (
    <div className='footer'>
        <div className='social-icons'>
            <a href='https://www.linkedin.com/in/mirjana-trajkovic-9900a522/'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            <a href='mailto:mikicavr@gmail.com'><i className="far fa-envelope"></i></a>
        </div>
        <div className='logo-svg'>
            <img src={logo} alt='logo' />
        </div>
        <div className='text'>
            <p>©2020 Mirjana Trajković</p>
        </div>
        
    </div>
)

export default Footer;