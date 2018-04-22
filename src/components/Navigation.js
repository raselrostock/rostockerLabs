import React, {Component} from 'react';
import {burgerToggle} from '../lib/navHelpers';
import {Link, NavLink} from 'react-router-dom';

class Navigation extends Component{
	render(){
		return(
			<header className="rl-header">
				<div className="hamburger" onClick={burgerToggle}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
				<div className="nav-container">
					<nav className="responsive-menu">
						<div className="brand"><Link exact to='/'>rostockerLabs</Link></div>
						<ul className="nav-list" onClick={burgerToggle}>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#cd6090' }} exact to='/'>home</NavLink></li>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#cd6090' }} exact to='/about'>about</NavLink></li>
								<li><NavLink activeClassName='active' activeStyle={{
								color: '#cd6090' }} exact to='/portfolio'>portfolio</NavLink></li>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#cd6090' }} exact to='/services'>services</NavLink></li>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#cd6090' }} exact to='/contact'>contact</NavLink></li>
						</ul>
					</nav>
					<nav className="top">
						<div className="brand"><Link to="/">rostockerLabs</Link></div>
						<ul>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#cd6090' }} exact to='/'>home</NavLink></li>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#cd6090' }} exact to='/about'>about</NavLink></li>
								<li><NavLink activeClassName='active' activeStyle={{
								color: '#cd6090' }} exact to='/portfolio'>portfolio</NavLink></li>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#cd6090' }} exact to='/services'>services</NavLink></li>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#cd6090' }} exact to='/contact'>contact</NavLink></li>
						</ul>
					</nav>
				</div>
			</header>
			);
	}
}
export default Navigation;