import React, {Component} from 'react';
import {Card, CardText, CardActions, CardMenu, CardTitle, Button, IconButton} from 'react-mdl';
import aaronbronw from '../../../images/aaron-brown.jpg';
import digitalhub from '../../../images/digital-hub.png';
import luciditydesign from '../../../images/lucidity-design.png';
import ocha from '../../../images/ocha.png';
class ReactCard extends Component{
	render(){
		return(
			<div className='projects-grid'>
				<Card className='project-card' shadow={5}>
				    <CardTitle ><img
									src={aaronbronw}
									/></CardTitle>
				    <CardText>
				    	<p className='project-title'>Aaron Brown Site</p>
				    	<p className='project-tech'>Technologies: Wordpress</p>
				        <p className='project-desc'>
				        	The site was created for Aaron Brown. In this site he wanted to show 
				        	all of his artfacts to his viewers. He also wanted to make a audio-vedio
				        	section where user can listen the audio tunes and also can see the youtube
				        	videos. He wanted to make a calendar section where users can get information
				        	regarding his future events.
				        </p>
				    </CardText>
				    <CardActions border className='project-links'>
				        <Button colored><a href="https://github.com/raselrostock/aaronbrownviolin.git"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true" /></a></Button>
                          <Button colored><a href="https://aaronbrownviolin.com/"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-fw fa-code" aria-hidden="true" /></a></Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
				<Card className='project-card' shadow={5}>
				    <CardTitle ><img
									src={digitalhub}
									/></CardTitle>
				    <CardText>
				    	<p className='project-title'>digitalhub logistics</p>
				    	<p className='project-tech'>Technologies: Wordpress</p>
				        <p className='project-desc'>
				        	The site was created for a client. Client has the specification for the site.
				        </p>
				    </CardText>
				    <CardActions border className='project-links'>
				        <Button colored><a href="https://www.google.com/"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true" /></a></Button>
                          <Button colored><a href="https://www.digitalhublogistics.hamburg/"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-fw fa-code" aria-hidden="true" /></a></Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
				<Card className='project-card' shadow={5}>
				    <CardTitle ><img
									src={luciditydesign}
									/></CardTitle>
				    <CardText>
				    	<p className='project-title'>Lucidity Design</p>
				    	<p className='project-tech'>Technologies: Wordpress</p>
				        <p className='project-desc'>
				        	The site was created for our Agency.
				        </p>
				    </CardText>
				    <CardActions border className='project-links'>
				        <Button colored><a href="https://www.google.com/"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true" /></a></Button>
                          <Button colored><a href="https://www.lucidity-design.com/"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-fw fa-code" aria-hidden="true" /></a></Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
				<Card className='project-card' shadow={5}>
				    <CardTitle ><img
									src={ocha}
									/></CardTitle>
				    <CardText>
				    	<p className='project-title'>Ocha</p>
				    	<p className='project-tech'>Technologies: Wordpress</p>
				        <p className='project-desc'>
				        	The site was created for a client. Client has the specification for the site.
				        </p>
				    </CardText>
				    <CardActions border className='project-links'>
				        <Button colored><a href="https://github.com/raselrostock/Ocha.pk.git"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true" /></a></Button>
                          <Button colored><a href="http://www.ocha.pk/"rel="noopener noreferrer" target="_blank">
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
export default ReactCard;