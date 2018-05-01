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
				<div className='row'>
    				<div className="col-md-4">
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
					</div>
    				<div className="col-md-8">
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
				              jobstartYear="January 2015"
				              jobendYear="March 2018"
				              jobName="Front-End / Back-End Developer | Deutsche Wirtschafts Nachrichten"
				              jobDescription="Responsible for the development work with React, PHP/MySQL, Laravel(PHP), HTML, CSS, JavaScript and GIT.
				              				- Support and Maintenance for multiples Wordpress websites.
											- Developing custom themes, plugins and new features within WordPress CMS environment
											- Working with highly customize Leaky Paywall plugin
											- Custom payment Gateway integration with wordpress"
				            />
				            <Experience
				                jobstartYear="April 2013"
				                jobendYear="December 2013"
				                jobName="Software Developer ( Android ) | John Deere, Kaiserslautern"
				                jobDescription="Developed the Android based application for the full-fulfillment of customer requirements as a member of a team"
				            />
				            <Experience
				                jobstartYear="September 2012"
				                jobendYear="March 2013"
				                jobName="Software Developer | Fraunhofer IESE, Kaiserslautern"
				                jobDescription="Engineering-style methods and techniques for the systematic development of Software-intensive systems, based on the customer project of Fraunhofer IESE, Kaiserslautern."
				            />
				            <Experience
				                jobstartYear="February 2011"
				                jobendYear="December 2011"
				                jobName="Part- time Research | Chair of Business Informatics (Rostock University)"
				                jobDescription="Implement and try out the SCIP framework which provides an application programming interface for applying Branch and Price solution methods to integer and mixed integer linear programming problems in C++."
				            />
				            <Experience
				                jobstartYear="November 2007"
				                jobendYear="September 2010"
				                jobName="Software Engineer | Rise UP Labs"
				                jobDescription="I was a Senior level web developer working with a development team on their internal and external web applications.
				                 One of the main projects I was tasked with was creating a new web framework/CMS, that is being used to create the next version of 
				                 their client facing web 
												application. Most of the work was focused on in-house project."
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
					</div>
				</div>
			</div>

		);
	}
}

export default About;