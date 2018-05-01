import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Particles from 'react-particles-js';
import Typist from 'react-typist';

class LandingPage extends Component{
	 render(){
		  return(
          <div className='landing-content'>
    				      <div className='row'>
    					       <div className="col-md-8">
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
                        
    					       </div>
                     
                     <div className="col-md-4">
                          <div className="landing-typetext">
                              <Typist cursor={{show:true,blink: true,}}>
                              <span className="fancy-heading"><b>Hello,</b><br/> my name is Mostofa kamal.</span><br/><br/><br/>
                              <span className='fancy-text'> I am a <b>
                              Full-Stack Web Developer</b><i class='fa fa-code color-3'></i>.</span><br/>
                              <span className='fancy-text'>Feel free to take a look at my portfolio section. </span>
                              <br/><span className='fancy-text'>Also you can stop and say hello at raselrostock@yahoo.com..</span>
                              </Typist>
                          </div>
                     </div>
    				      </div>
          </div>
			);
	}
}

export default LandingPage;