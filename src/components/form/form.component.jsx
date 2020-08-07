import React, {useState} from 'react';
import {Animated} from 'react-animated-css';
import Recaptcha from 'react-recaptcha';

import './form.styles.scss';

const Form = () => {

    const [state, setState] = useState({isVerified: false})

    const verifyCallback = (response) => {
        if (response) {
            setState({
                isVerified: true
            })
        }
    }

    const handleLoad = () => {
        console.log('reCaptcha loaded')
    }
    return(
    <Animated animationIn="fadeInLeft" animationInDuration isVisible={true}>
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
                    
                </div>
                <Recaptcha
                        sitekey="6LdY9roZAAAAAN9F8Z-LqdXGFTmWwZmjc0WonavE"
                        render="explicit"
                        verifyCallback={verifyCallback}
                        onloadCallback={handleLoad}
                    />
            </form>
        </div>
    </Animated>    
    ) 
}

export default Form;