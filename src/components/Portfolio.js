import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardActions, CardMenu, CardTitle, Button, IconButton} from 'react-mdl';
import EthereumCard from './Projects/EthereumCard';
import ReactCard from './Projects/ReactCard';
import WordpressCard from './Projects/WordpressCard';
import HtmlCard from './Projects/HtmlCard';
class Portfolio extends Component{
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
				<EthereumCard />
				);
		}
		else if(this.state.activeTab === 1)
		{
			return(
				<ReactCard />
				);
		}
		else if(this.state.activeTab === 2)
		{
			return(
				<WordpressCard />
				);
		}
		else if(this.state.activeTab === 3)
		{
			return(
				<HtmlCard />
				);
		}
	}
	render(){
		return(
			<div className='rl-portfolio'>
				<div className='category-tabs'>
					<Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
						<Tab>Ethereum</Tab>
						<Tab>React</Tab>
						<Tab>Wordpress</Tab>
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

export default Portfolio;