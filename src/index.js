import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './style/style.scss';
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, document.getElementById('root'));