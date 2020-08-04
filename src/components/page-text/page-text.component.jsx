import React from 'react';
import {Animated} from 'react-animated-css';

const PageText = ({name, above}) => (
    <div>
        <Animated animationIn='fadeInLeft' animationInDuration={1500} isVisible={true}>
            <h4><span>{above}</span></h4>
            <h3>{name}</h3>
        </Animated>    
    </div>
)

export default PageText;