import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
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
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      {props.location.pathname !== '/' ? <Footer /> : ''}
    </div>
  );
}

export default withRouter(App);
