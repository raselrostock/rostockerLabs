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
                    <div className="copyright-section">
             			<div class="single-point">
                                <Link to="/">c</Link>
                        </div>
                        <span className="copyright-text">2018 rostockerLabs</span>
                    </div>
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