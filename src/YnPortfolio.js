import React from 'react';
import Header from "components/Header";
import Footer from "components/Footer"
import Main from 'components/Main';
import About from 'components/About';
import Contact from 'components/Contact';
import Portfolio from 'components/portfolio/Portfolio';
import { Switch, Route, Link } from 'react-router-dom';

const YnPortfolio = () => {
  return (
    <>
      <Header/> 
      <Switch>
        <Route path="/" exact={true} component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Switch>
      <Footer/>
    </>
  );
};

export default YnPortfolio;