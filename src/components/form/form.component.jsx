import React from 'react';
import {Animated} from 'react-animated-css';

import './form.styles.scss';

const Form = () => {

    return(
    <Animated animationIn="fadeInLeft" animationInDuration={1000} isVisible={true}>
        <div className='form-div'>
            <form className="form"> 
                <p className="name">
                    <input name="name" type="text" className="feedback-input" placeholder="Name" />
                </p>
                <p className="email">
                    <input name="email" type="text" className="feedback-input" placeholder="Email" />
                </p>
                <p className="text">
                    <textarea name="text" className="feedback-input" placeholder="Message"></textarea>
                </p>
                <div className="submit">
                    <button type="submit" value="SEND" id="button-blue">SEND</button>
                    {/*<div className="ease"></div>*/}
                </div>
            </form>
        </div>
    </Animated>    
    ) 
}

export default Form;