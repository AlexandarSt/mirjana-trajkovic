import React from 'react';
import {Animated} from 'react-animated-css';

import './contact-info.styles.scss';

const ContactInfo = () => {
    return (
    <div>    
        <Animated animationIn='fadeInLeft' animationInDuration={1500} isVisible={true} className='contact-info'>    
            
                <h5><i className='fa fa-phone' aria-hidden='true'></i>Phone</h5>
                <h6>+381 65 1234567</h6>
            
                <h5><i className='fa fa-map-marker' aria-hidden='true'></i>Address</h5>
                <h6>11000 Beograd<br />Srbija</h6>
            
                <h5><i className='fa fa-envelope' aria-hidden='true'></i>Email</h5>
                <h6>mikicavr@gmail.com</h6>
            
        </Animated>
    </div>
    )
}

export default ContactInfo;

