import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Footer extends Component{
	render(){
		return(
			<div className='rl-footer-container'>
            	<Grid className='rl-footer-grid'>
               		<Cell col={4}>
       					<p><span><a href="#about" class="smoth-scroll">About Me</a></span> | <span><a href="#portfolio" class="smoth-scroll">Portfolio</a></span></p>
          			</Cell>
               		<Cell col={4}>
       					<p><span><a href="#about" class="smoth-scroll">About Me</a></span> | <span><a href="#portfolio" class="smoth-scroll">Portfolio</a></span></p>
          			</Cell>
          			<Cell col={4}>
       					<p>Design By <a href="./" title="Md. Mostofa Kamal">Md. Mostofa Kamal</a></p>
          			</Cell>
             	</Grid>
        	</div>

			);
	}
}

export default Footer;