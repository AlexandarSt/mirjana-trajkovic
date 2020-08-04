import React from 'react';
import Form from '../../components/form/form.component';
import PageText from '../../components/page-text/page-text.component';
import ContactInfo from '../../components/contact-info/contact-info.component';
import GoogleMaps from '../../components/google-maps/google-maps.component';

import './contact.styles.scss';


const Contact = () => {
    return ( 
    <div className='contact-page'>
        <PageText name='Contact Us' above='Location '/>
        <div className='contact'>
            <ContactInfo />
            <Form />
        </div>
        <div className='map'>
            <GoogleMaps />
        </div>    
    </div>    
    )
}

export default Contact;