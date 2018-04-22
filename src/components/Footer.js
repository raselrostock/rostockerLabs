import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {Link} from 'react-router-dom';
class Footer extends Component{
	render(){
		return(
  			<div className='rl-footer-container'>
            <Grid className='rl-footer-grid'>
                <Cell col={4}>
         					<p><span><Link to="/about">About Me</Link></span> | <span><Link to="/portfolio">Portfolio</Link></span></p>
            		</Cell>
                <Cell col={4}>
         					<p>© 2017 Maria D. Campbell</p>
            			</Cell>
            			<Cell col={4}>
         					<p>Design By <Link to="./">Md. Mostofa Kamal</Link></p>
            	  </Cell>
            </Grid>
        </div>
			);
	}
}

export default Footer;