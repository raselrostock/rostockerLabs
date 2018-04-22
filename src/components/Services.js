import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardActions, CardMenu, CardTitle, Button, IconButton} from 'react-mdl';
import ReactCard from './Projects/ReactCard';
class Services extends Component{
	constructor(props){
		super(props);
		this.state={
			activeTab:0
		};
	}
	toggleProjects(){
		if(this.state.activeTab === 0)
		{
			return(
				<ReactCard />
				);
		}
		else if(this.state.activeTab === 1)
		{
			return(
				<h1>Angular projects</h1>
				);
		}
		else if(this.state.activeTab === 2)
		{
			return(
				<h1>Html projects</h1>
				);
		}
	}
	render(){
		return(
			<div className='rl-portfolio'>
				<div className='category-tabs'>
					<Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
						<Tab>React</Tab>
						<Tab>Angular</Tab>
						<Tab>Html</Tab>
					</Tabs>
					<section className='portfolios-grid'>
						<Grid >
							<Cell col={12}>
								<div className='content'>
									{this.toggleProjects()}
								</div>
							</Cell>
						</Grid>
						
					</section>
				</div>
			</div>
			);
	}
}

export default Services;