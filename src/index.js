import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import App from './App';
/* Material js and css*/
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './style/style.scss';

ReactDOM.render(
				<Router>
					<App />
				</Router>, 
				document.getElementById('root')
				);