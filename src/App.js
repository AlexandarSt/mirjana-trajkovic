import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.page';
import About from './pages/about/about.page';
import Work from './pages/work/work.page';
import Contact from './pages/contact/contact.page';
import './App.css';


function App(props) {

  return (
    <div>
      {props.location.pathname === '/' ? <Header style='ms-header navbar-white'/> : <Header style='ms-header'/>}
      <Switch>
      <ScrollToTop>  
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/contact' component={Contact} />
      </ScrollToTop>  
      </Switch>
      {props.location.pathname !== '/' ? <Footer /> : ''}
    </div>
  );
}

export default withRouter(App);
