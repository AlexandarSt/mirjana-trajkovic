import React from 'react';
import PageText from '../../components/page-text/page-text.component';

import './about.styles.scss';

const About = () => (
    <div className='about'>
        <PageText name='Who am I?' above='about'/>
        <div className='about-content'>
            <div className='about-picture'>
                <img src='slike/mitrajkovic-org.jpg' alt='Mirjana Trajkovic' /> 
            </div>
            <div className='about-text'>
                <h3>Naslov</h3>
                <p>Jedan paragraf teksta</p>
                <p>Drugi paragraf teksta</p>
            </div>
        </div>
    </div>
)

export default About;