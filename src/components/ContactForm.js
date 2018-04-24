import React from 'react';
import { Grid, Cell} from 'react-mdl';
const ContactForm = () =>{
	return(
		<div className='contact-form'>
            <h2 className="text-center">Contact me</h2>
            <br />
            <form
                action="https://formspree.io/raselrostock@gmail.com"
                method="POST"
                className="contactform"
                autocomplete="off"
            >
                <div className="form-group">
                    <input
                        type="email"
                        name="_replyto"
                        className="form-control"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="form-group">
                    <input name="name" className="form-control" placeholder="Name" autocomplete="off" required />
                </div>
                 
                <div className="form-group">
                    <textarea className="form-control" placeholder="Message" name="message" rows="10" autocomplete="off" required />
                </div>
                <div className="form-group">
                    <input
                       type="submit"
                       value="SEND MESSAGE"
                       className="form-control submit"
                      />
                </div>
            </form>
        </div>
	);
} 

export default ContactForm;