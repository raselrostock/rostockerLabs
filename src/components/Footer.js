import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component{
	render(){
		return(
  			<div className='rl-footer-container'>
            <div className='row'>
                <div className="col-md-4">
         					<p><span><Link to="/about">About Me</Link></span> | <span><Link to="/portfolio">Portfolio</Link></span></p>
            	</div>
                <div className="col-md-4">
         			<p>© 2018 rostockerLabs</p>
                </div>
            	<div className="col-md-4">
         			<p>Design By: <Link to="/">Md. Mostofa Kamal</Link></p>
            	</div>
            </div>
        </div>
			);
	}
}

export default Footer;