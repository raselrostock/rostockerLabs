import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';
import {HashRouter as Router} from 'react-router-dom';

const Main = () => (
		<Switch>
			<Route exact path='/' component={LandingPage} />
			<Route path='/about' component={About} />
			<Route path='/portfolio' component={Portfolio} />
			<Route path='/contact' component={Contact} />
		</Switch>
)
export default Main;