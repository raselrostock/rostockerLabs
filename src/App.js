import React, { Component } from 'react';
import { Layout, Header } from 'react-mdl';

import Navigation from './components/Navigation';
import Main from './components/Main';
import { NavLink } from 'react-router-dom';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="rl-app">
            <div className='rl-app-content'>
                    <Navigation />
                    <div className="rl-wrapper">
                        <Main />
                    </div>
                    <div className="rl-footer">
                        <Footer />
                    </div>
               
            </div>
    </div>

    );
  }
}

export default App;