import React, {Component} from 'react';
import {Card, CardText, CardActions, CardMenu, CardTitle, Button, IconButton} from 'react-mdl';

class ReactCard extends Component{
	render(){
		return(
			<div className='projects-grid'>
				<Card className='reactcard' shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
				    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
				    <CardText>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				        Mauris sagittis pellentesque lacus eleifend lacinia...
				    </CardText>
				    <CardActions border>
				        <Button colored>Get Started</Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
				<Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
				    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
				    <CardText>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				        Mauris sagittis pellentesque lacus eleifend lacinia...
				    </CardText>
				    <CardActions border>
				        <Button colored>Get Started</Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
				<Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
				    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
				    <CardText>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				        Mauris sagittis pellentesque lacus eleifend lacinia...
				    </CardText>
				    <CardActions border>
				        <Button colored>Get Started</Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
				<Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
				    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
				    <CardText>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				        Mauris sagittis pellentesque lacus eleifend lacinia...
				    </CardText>
				    <CardActions border>
				        <Button colored>Get Started</Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
				<Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
				    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
				    <CardText>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				        Mauris sagittis pellentesque lacus eleifend lacinia...
				    </CardText>
				    <CardActions border>
				        <Button colored>Get Started</Button>
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