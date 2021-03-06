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
						<div className="brand"><Link exact to='/'>raselRostock</Link></div>
						<ul className="nav-list" onClick={burgerToggle}>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#DF292D' }} exact to='/'>home</NavLink></li>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#DF292D' }} exact to='/about'>about</NavLink></li>
								<li><NavLink activeClassName='active' activeStyle={{
								color: '#DF292D' }} exact to='/portfolio'>portfolio</NavLink></li>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#DF292D' }} exact to='/contact'>contact</NavLink></li>
						</ul>
					</nav>
					<nav className="top">
						<div className="brand"><Link to="/">raselRostock</Link></div>
						<ul>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#DF292D' }} exact to='/'>home</NavLink></li>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#DF292D' }} exact to='/about'>about</NavLink></li>
						    <li><NavLink activeClassName='active' activeStyle={{
								color: '#DF292D' }} exact to='/portfolio'>portfolio</NavLink></li>
							<li><NavLink activeClassName='active' activeStyle={{
								color: '#DF292D' }} exact to='/contact'>contact</NavLink></li>
						</ul>
					</nav>
				</div>
			</header>
			);
	}
}
export default Navigation;