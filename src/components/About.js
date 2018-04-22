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
							<h4 style={{color:'grey'}}> Programmer</h4>
							<hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
							<p>So you are here and you intersted about me.There is nothing to say as like long.
							 I am a simple boy who accomplished his Masters in Software Engineering. Most of t
							 he time of a day i work with my laptop.I am a web and android developer.I like to 
							 make  webpage and try to make it 100% pixel perfect.A website is not only some pages.
							 Its a dream and i work for make this dream true.I work hard for make a better experience.
							  Almost 14 hours of a day i worked.I try to learn and know the tchnology. i am expert about
							  html5, Css3, javascript, jquery, psd / png / jpg to responsive html+Css, wordpress and some
							   of plugin, laravel, java and as well as android development. I think you will not be regret
							    for hire me.Your satisfaction Is my first priority.Feel free to contact me.
							 </p>
						</div>
					</Cell>
					<Cell col={8}>
						<div className='about-right'>
							<h2>Education</h2>
				            <Education
				              startYear={2002}
				              endYear={2006}
				              schoolName="My University"
				              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
				            />

				            <Education
				                 startYear={2007}
				                 endYear={2009}
				                 schoolName="My 2nd University"
				                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
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
				                skill="javascript"
				                progress={100}
				            />
				            <Skills
				                  skill="HTML/CSS"
				                  progress={80}
				            />
				            <Skills
				                    skill="NodeJS"
				                    progress={50}
				            />
				            <Skills
				                skill="React"
				                progress={25}
				            />
						</div>
					</Cell>
				</Grid>
			</div>

		);
	}
}

export default About;