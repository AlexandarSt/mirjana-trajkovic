import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../assets/rastamimi.jpg';

import './homepage.styles.scss';
// import './custom.css';
// import './justin-red.css';
// import './settings.css';
// import './vendor.css';

const HomePage = () => {

	useEffect(() => {
		Aos.init({duration: 500})
	}, [])

	return(
	<div className='home'>
		<div className='home-bckgrnd'></div>
		<div data-aos='flip-up' className='section-about'>
			<div className='about-text'>
				<h2>Hello!</h2>
				<h4>I'm Mimi and i like to smoke pot and you can call me Rasta Lion ;)</h4>
			</div>
			<div className='about-picture'>
				<img src={Logo} alt='Rasta'/>
			</div>
		</div>
	</div>	
	)
}

export default HomePage;