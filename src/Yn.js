import React from 'react';
import Header from "components/Header";
import Footer from "components/Footer"
import Main from 'components/Main';
import About from 'components/About';
import Contact from 'components/Contact';
import Portfolio from 'components/yn/Portfolio';
import { Switch, Route, Link } from 'react-router-dom';

const Yn = () => {
  return (
    <>
      <Header/> 
      <Switch>
        <Route path="/yn/" exact={true} component={Main}/>
        <Route path="/yn/about" component={About}/>
        <Route path="/yn/contact" component={Contact}/>
        <Route path="/yn/portfolio" component={Portfolio}/>
      </Switch>
      <Footer/>
    </>
  );
};

export default Yn;