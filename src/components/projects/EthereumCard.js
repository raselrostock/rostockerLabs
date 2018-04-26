import React, {Component} from 'react';
import {Card, CardText, CardActions, CardMenu, CardTitle, Button, IconButton} from 'react-mdl';
import dappelection from '../../../images/dapp-election.png';
class ReactCard extends Component{
	render(){
		return(
			<div className='projects-grid'>
				<Card className='project-card' shadow={5}>
				    <CardTitle ><img
									src={dappelection}
									/></CardTitle>
				    <CardText>
				    	<p className='project-title'>Dapp Election</p>
				    	<p className='project-tech'>Technologies: Solidity, Web3, Es6, Webpack</p>
				        <p className='project-desc'>
				        	The portfolio site is created in React. In the site user can see
				        	description of personal information, as well as all the project layout,
				        	user can see the project links and can also can see the code with associated
				        	github links.
				        </p>
				    </CardText>
				    <CardActions border className='project-links'>
				        <Button colored><a href="https://github.com/raselrostock/dapp-election"rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true" /></a></Button>
                          <Button colored><a href="https://raselrostock.github.io/dapp-election/"rel="noopener noreferrer" target="_blank">
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