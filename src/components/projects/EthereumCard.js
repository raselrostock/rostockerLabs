import React, {Component} from 'react';
import {Card, CardText, CardActions, CardMenu, CardTitle, Button, IconButton} from 'react-mdl';

class ReactCard extends Component{
	render(){
		return(
			<div className='projects-grid'>
				<Card className='project-card' shadow={5}>
				    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
				    <CardText>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				        Mauris sagittis pellentesque lacus eleifend lacinia...
				    </CardText>
				    <CardActions border className='project-links'>
				        <Button colored><a href="https://www.google.com/"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true" /></a></Button>
                          <Button colored><a href="https://www.google.com/"rel="noopener noreferrer" target="_blank">
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