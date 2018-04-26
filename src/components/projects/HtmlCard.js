import React, {Component} from 'react';
import {Card, CardText, CardActions, CardMenu, CardTitle, Button, IconButton} from 'react-mdl';
import aven from '../../../images/aven-bg.jpg';
import highgrove from '../../../images/highgrove-bg.jpg';
import rosa from '../../../images/rosa-bg.jpg';
import travel from '../../../images/travel-web.png';
class HtmlCard extends Component{
	render(){
		return(
			<div className='projects-grid'>
				<Card className='project-card' shadow={5}>
				    <CardTitle ><img
									src={aven}
									/></CardTitle>
				    <CardText>
				    	<p className='project-title'>Aven Theme</p>
				    	<p className='project-tech'>Technologies: HTML5, Css3, Sass</p>
				        <p className='project-desc'>
				        	A fully designed functional Html5 template.
				        </p>
				    </CardText>
				    <CardActions border className='project-links'>
				        <Button colored><a href="https://github.com/raselrostock/aven-theme"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true" /></a></Button>
                          <Button colored><a href="https://raselrostock.github.io/aven-theme/"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-fw fa-code" aria-hidden="true" /></a></Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
				<Card className='project-card' shadow={5}>
				    <CardTitle ><img
									src={highgrove}
									/></CardTitle>
				    <CardText>
				    	<p className='project-title'>Highgrove Theme</p>
				    	<p className='project-tech'>Technologies: HTML5, Css3, Sass</p>
				        <p className='project-desc'>
				        	A fully designed functional Html5 template.
				        </p>
				    </CardText>
				    <CardActions border className='project-links'>
				        <Button colored><a href="https://github.com/raselrostock/highgrove-theme"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true" /></a></Button>
                          <Button colored><a href="https://raselrostock.github.io/highgrove-theme/"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-fw fa-code" aria-hidden="true" /></a></Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
				<Card className='project-card' shadow={5}>
				    <CardTitle ><img
									src={rosa}
									/></CardTitle>
				    <CardText>
				    	<p className='project-title'>Rosa Theme</p>
				    	<p className='project-tech'>Technologies: HTML5, Css3, Sass</p>
				        <p className='project-desc'>
				        	A fully designed functional Html5 template.
				        </p>
				    </CardText>
				    <CardActions border className='project-links'>
				        <Button colored><a href="https://github.com/raselrostock/rosa-theme"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true" /></a></Button>
                          <Button colored><a href="https://raselrostock.github.io/rosa-theme/"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-fw fa-code" aria-hidden="true" /></a></Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
				<Card className='project-card' shadow={5}>
				    <CardTitle ><img
									src={travel}
									/></CardTitle>
				    <CardText>
				    	<p className='project-title'>Travel Theme</p>
				    	<p className='project-tech'>Technologies: HTML5, Css3, Sass</p>
				        <p className='project-desc'>
				        	A fully designed functional Html5 template.
				        </p>
				    </CardText>
				    <CardActions border className='project-links'>
				        <Button colored><a href="https://github.com/raselrostock/travelWeb"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true" /></a></Button>
                          <Button colored><a href="https://raselrostock.github.io/travelWeb/"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-fw fa-code" aria-hidden="true" /></a></Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
				
			</div>	
			);
	}
}
export default HtmlCard;