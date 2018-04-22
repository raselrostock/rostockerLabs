import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Particles from 'react-particles-js';
import Typist from 'react-typist';

class LandingPage extends Component{
	 render(){
		  return(
          <div className='landing-content'>
    			     <div className='landing-page'>
    				      <Grid className='landing-grid'>
    					       <Cell col={8}  tablet={8}>
                          <div className='landing-outer'>
                              <div className='landing-inner'>
                						      <div id="particles-js">
                          							<Particles 
                                            params={{
                                                particles:{
                                                    "number":{
                                                      "value":50
                                                    },
                                                    "color":{
                                                      "value":"#fff"
                                                    },
                                                    "shape":{
                                                      "type":"circle",
                                                      "stroke":{
                                                        "width":1,
                                                        "color":"#ccc"
                                                      },
                                                      "image":{
                                                        "src":"http://www.iconsdb.com/icons/preview/white/contacts-xxl.png"
                                                      }
                                                    },
                                                    "opacity":{
                                                      "value":0.5,
                                                      "random":true,
                                                      "anim":{
                                                        "enable":false,
                                                        "speed":1
                                                      }
                                                    },
                                                    "size":{
                                                      "value": 5,
                                                      "random":false,
                                                      "anim":{
                                                        "enable": false,
                                                        "speed":30
                                                      }
                                                    },
                                                    "line_linked":{
                                                      "enable": true,
                                                      "distance": 120,
                                                      "color":"#fff",
                                                      "width":1
                                                    },
                                                    "move":{
                                                      "enable":true,
                                                      "speed":2,
                                                      "direction":"none",
                                                      "straight":false
                                                    }
                                                  },
                                                  "interactivity":{
                                                    "events":{
                                                      "onhover":{
                                                        "enable":true,
                                                        "mode":"repulse"
                                                      },
                                                      "onclick":{
                                                        "enable": true,
                                                        "mode":"push"
                                                      }
                                                    },
                                                    "modes":{
                                                      "repulse":{
                                                        "distance":50,
                                                        "duration":0.4
                                                      },
                                                      "bubble":{
                                                        "distance":100,
                                                        "size":10
                                                      }
                                                    }
                                                  }

                                             }}

                                        />
                          				</div> 
                              </div>
                          </div>
    					       </Cell>
                     
                     <Cell col={4}  tablet={4}>
                          <div className="landing-typetext">
                              <Typist cursor={{show:true,blink: true,}}>
                              <h2 className="heading-thistle-medium">Hello, my name is Md. Mostofa kamal.</h2><br/> 
                              <h3><span class='fancy'> I am a <b>
                              Full-Stack Web Developer</b><i class='fa fa-code color-3'></i>.</span><br/><span class='fancy'>Feel free to take a look at my portfolio section. </span>
                              <br/><span class='fancy'>Also you can stop and say hello at raselrostock@yahoo.com..</span></h3>
                              </Typist>
                          </div>
                     </Cell>
    				    </Grid>
    			     </div>
          </div>
			);
	}
}

export default LandingPage;