import React from 'react';
import './contactme.css';

function ContactMe() {
    return (
        <div className='contactme'>
            <div className="container">
                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask about anything you have in mind.</p>
                <form>

                    <div className="col2">
                        <label>
                            First name
                            <input type="text" id='first_name' placeholder='Enter your first name' required/>
                        </label>
                        <label>
                            Last name
                            <input type="text" id='last_name' placeholder='Enter your last name' required/>
                        </label>
                    </div>
                    <label>
                        Email
                        <input type="email" id='email' placeholder='yourname@gmail.com' required/>
                    </label>
                    <label>
                        Message
                        <textarea name="" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." required/>
                    </label>
                    <label className='checkbox_input'>
                        You agree to providing your data to Eyonganyoh Teddy who may contact you.
                        <input type="checkbox" id='checkbox'/>
                    </label>
                    <button id='btn__submit'>Send message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
