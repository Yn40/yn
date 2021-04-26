import React from 'react';
import Header from "components/Header";
import Footer from "components/Footer"
import Main from 'components/Main';
import About from 'components/About';
import Contact from 'components/Contact';
import Portfolio from 'components/yn/Portfolio';
import { Switch, Route, Link, useLocation , useHistory } from 'react-router-dom';

const routerPath = [
  "/yn/about",
  "/yn/contact",
  "/yn/about",
  "/yn/portfolio",
]

const Yn = () => {
  function NoMatch() {
    console.log("----NoMatch-----");
    let location = useLocation();
    let history = useHistory();
    routerPath.map(url => {
      if(url == location) {
        alert("stop1");
        history.replace(url);
      }
    });
    alert("stop2");
    history.replace("/yn");

    
    console.log(location);
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }
  return (
    <>
      <Header/> 
      <Switch>
        <Route path="/yn" exact={true} component={Main}/>
        <Route path="/yn/about" component={About}/>
        <Route path="/yn/contact" component={Contact}/>
        <Route path="/yn/portfolio" component={Portfolio}/>
        <Route path="/yn/*"><NoMatch/></Route>
        {/* <Route component={Main} /> */}
      </Switch>
      <Footer/>
    </>
  );
};

export default Yn;