import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Particles from 'react-particles-js';
class LandingPage extends Component{
	render(){
		return(
			<div className='landing-page'>
				<Grid className='landing-grid'>
					<Cell col={12}>
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

                            }}/>
						</div>
              </div>
              </div>
					</Cell>
				</Grid>
			</div>
			);
	}
}

export default LandingPage;