import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import profileSmall from '../../images/rasel.jpg';

class About extends Component{
	render(){
		return(
			<div className='rl-about'>
				<Grid>
					<Cell col={4}>
						<div className='about-left'>
							<div className='about-avatar'>
								<img
									src={profileSmall}
									alt='Mostofa Kamal'
									style={{height: '200px'}}
									/>
							</div>
							<h2 style={{paddingTop:'2em'}}> Mostofa Kamal</h2>
							<h4 style={{color:'grey'}}> Fullstack Developer</h4>
							<hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
							<p>So you are here and you intersted about me.There is nothing to say as like long.
							 I am a simple boy who accomplished his Masters in Software Engineering. Most of t
							 he time of a day i work with my laptop.I am a Software Engineer.I like to 
							 make  webpage and try to make it 100% perfect based on required specification.A website
							  is not only some pages. Its a dream and i work for make this dream true. I try to learn and know 
							  new tchnology. After worked almost 3 years for companies, recently I quit the job and start doing
							  freelancing. I am expert in Ethereum, React, NodeJs, Php, Laravel, Wordpress.<br/> 

							  And I think you will not be regret for hire me.<br/>
							  Your <strong>satisfaction</strong> Is my <strong>first priority</strong>.
							 </p>
						</div>
					</Cell>
					<Cell col={8}>
						<div className='about-right'>
							<h2>Education</h2>
				            <Education
				              startYear={2012}
				              endYear={2015}
				              schoolName="Technical University of Kaiserslautern, Germany"
				              schoolDescription="Master of Computer Science in Software Engineering"
				            />

				            <Education
				                 startYear={2003}
				                 endYear={2007}
				                 schoolName="American International University of Bangladesh"
				                 schoolDescription="Bachelor of Computer Science"
				            />
				            <hr style={{borderTop: '3px solid #e22947'}} />

				            <h2>Experience</h2>
				            <Experience
				              startYear={2009}
				              endYear={2012}
				              jobName="First Job"
				              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
				            />
				            <Experience
				                startYear={2012}
				                endYear={2016}
				                jobName="Second Job"
				                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
				            />
				            <hr style={{borderTop: '3px solid #e22947'}} />
				            
				            <h2>Skills</h2>
				            <Skills
				                  skill="Ethereum"
				                  progress={60}
				            />
				            <Skills
				                skill="React"
				                progress={85}
				            />
				            <Skills
				                skill="PHP"
				                progress={95}
				            />
				            
				            <Skills
				                skill="JavaScript"
				                progress={95}
				            />
				            <Skills
				                  skill="HTML5/CSS3"
				                  progress={100}
				            />
				            <Skills
				                  skill="Wordpress"
				                  progress={100}
				            />
				            
				            
						</div>
					</Cell>
				</Grid>
			</div>

		);
	}
}

export default About;