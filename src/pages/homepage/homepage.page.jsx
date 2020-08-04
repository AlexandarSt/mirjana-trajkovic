import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './homepage.styles.scss';
// import './custom.css';
// import './justin-red.css';
// import './settings.css';
// import './vendor.css';

const HomePage = () => {

	useEffect(() => {
		Aos.init({duration: 1000})
	}, [])

	return(
	<div>
		<div className='home'></div>
		<div data-aos='fade-in' className='section-about'>
				Heya!
		</div>
	</div>	
	)
}

export default HomePage;