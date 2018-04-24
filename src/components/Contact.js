import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import ContactForm from './ContactForm';
class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
              <ContactForm />
          </Cell>
          <Cell col={6}>
              <div className='social-panel'>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="social-links">

                        {/* Github */}
                        <a href="https://github.com/raselrostock" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/MostofaKamalRasel" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-facebook-square" aria-hidden="true" />
                        </a>

                        {/* Twitter */}
                        <a href="https://twitter.com/raselrostock" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-twitter-square" aria-hidden="true" />
                        </a>
                    </div>
                </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;