import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Product from "./components/Product";
import ProductItem from "./components/ProductItem";
import NavBar from './NavBar'


function RouteConfig() {
  return (
        <div>
        <Router>
          <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={AboutUs}/>
                <Route exact path="/product" component={Product}/>
                <Route path="/product/:id" component={ProductItem}/>
                <Route path="*" component={()=><h2>404 Not Found</h2>}/>
            </Switch>
        </Router>
        </div>
  );
}

export default RouteConfig;