import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/crown.svg';

// import './header.styles.scss';
import './header.css';

const INITIAL_STATE = {
  open: false
}

const Header = ({style}) => {

const [state, setState] = useState(INITIAL_STATE)

const toggleMenu = () => {
  setState({
    open: !state.open
  })
} 

return (
    <div className={style} >
        {/* <header className="ms-header navbar-white"> */}
        <nav className={`${state.open && 'is-visible'} ms-nav`}>
          <div className="ms-logo">
            <Link to="/">
              <div className="logo current"><img src={logo} alt="logo" /></div>
            </Link>
          </div>
          <button className={`${state.open && 'is-active'} hamburger`} type="button" onClick={toggleMenu}>
          <span className="hamburger-box">
            <span className="hamburger-label">menu</span>
            <span className="hamburger-inner"></span>
          </span>
          </button>
          <div className="height-full-viewport">
            <ul className="ms-navbar">
              {/* Nav Link */}
              <li className="nav-item">
                <Link to='/' onClick={toggleMenu}>
                  <span className="ms-btn">home</span>
                  <span className="nav-item__label">Back to home page</span>
                </Link>
              </li>
              {/* Nav Link */}
              <li className="nav-item">
                <Link to='/about' onClick={toggleMenu}>
                  <span className="ms-btn">about</span>
                  <span className="nav-item__label">Learn more about the author</span>
                </Link>
              </li>
              {/* Nav Link */}
              <li className="nav-item">
                <Link to='/work' onClick={toggleMenu}>
                  <span className="ms-btn">work</span>
                  <span className="nav-item__label">View all my works</span>
                </Link>
              </li>
              {/* Nav Link */}
              <li className="nav-item">
                <Link to='/contact' onClick={toggleMenu}>
                  <span className="ms-btn">contact</span>
                  <span className="nav-item__label">Get in touch</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      {/* </header> */}
    </div>
)
}

export default Header;