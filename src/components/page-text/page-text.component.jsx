import React from 'react';
import {Animated} from 'react-animated-css';

import './page-text.styles.scss';

const PageText = ({name, above}) => (
    <div className='page-text'>
        <Animated animationIn='fadeInLeft' animationInDuration isVisible={true}>
            <h4 className='pt-above'><span>{above}</span></h4>
            <h3 className='pt-name'>{name}</h3>
        </Animated>    
    </div>
)

export default PageText;