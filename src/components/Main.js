import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';
import {HashRouter as Router, hashHistory} from 'react-router-dom';

const Main = () => (
	<Router history={hashHistory}>
		<Switch>
			<Route exact path='/' component={LandingPage} />
			<Route path='/about' component={About} />
			<Route path='/portfolio' component={Portfolio} />
			<Route path='/services' component={Services} />
			<Route path='/contact' component={Contact} />
		</Switch>
	</Router>
)
export default Main;