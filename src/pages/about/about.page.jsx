import React from 'react';
import PageText from '../../components/page-text/page-text.component';

import './about.styles.scss';

const About = () => (
    <div className='about-me'>
        <PageText name='Who am I?' above='about'/>
        <div className='about-me-content'>
            <div className='about-me-picture'>
                <img src='slike/mitrajkovic-org.jpg' alt='Mirjana Trajkovic' /> 
            </div>
            <div className='about-me-text'>
                <span>Hello, I am</span>
                <h4>Mirjana Trajković</h4>
                {/*<div className="linediv"><hr className="line"/></div>*/}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor risus augue, at pulvinar libero fringilla et.
                     Nam in vestibulum mi. Integer nec felis at tortor maximus convallis ut sed ante. 
                     Nam lobortis, lorem in suscipit facilisis, metus augue ultricies sem, eget mattis urna turpis sit amet odio. 
                     Phasellus sed mi rutrum, tristique magna id, porttitor turpis. Sed pulvinar et diam nec sollicitudin. 
                     Nullam venenatis consequat lorem, in semper sem tincidunt tristique. Etiam eget tempor lacus. Aenean vel gravida libero. 
                     Vivamus tristique, lectus vel sodales semper, ipsum ex convallis turpis, quis accumsan nulla tortor at massa. 
                     Cras in ex a nulla ultricies scelerisque ut posuere ante. 
                     Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                <p>Curabitur maximus congue dui. Ut lacinia ipsum vitae ornare consectetur. Proin volutpat nec massa id ornare. 
                    Sed ac malesuada arcu, vel pharetra ante. Ut ut neque blandit, vehicula justo non, lobortis nibh. 
                    Pellentesque eget ullamcorper velit, ac dignissim lorem. Cras nec mi eros. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Mauris suscipit laoreet mattis. Duis tempus tempus risus non auctor.</p>
            </div>
        </div>
    </div>
)

export default About;