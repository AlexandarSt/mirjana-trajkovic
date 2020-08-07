import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Picture from '../../assets/mitrajkovic.jpg';

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
				<h4>About Me</h4>
				<p>Passionate designer who loves 
					simplicity in things and crafts 
					beautiful designs with love.</p>
				<ul>
					<li>
						<a href='https://www.linkedin.com/in/mirjana-trajkovic-9900a522/'>
						<i className="fa fa-linkedin-square" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a href='mailto:mikicavr@gmail.com'>
						<i className="far fa-envelope"></i>
						</a>
					</li>
				</ul>	
			</div>
			<div className='about-picture'>
				<img src={Picture} alt='Mirjana Trajkovic'/>
			</div>
		</div>
	</div>	
	)
}

export default HomePage;