import React, {useState} from 'react';
import './contactme.css';

function ContactMe() {


    const initialValues = { first_name: "", last_name: "", email: "", message: "" }
    const [formValues, setFormValues] = useState(initialValues);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = () => {
        console.log(formValues);
    }

    
    return (
        <div className='contactme'>
            <div className="container">
                <h2>Contact Me</h2>
                <p className='subtext'>Hi there, contact me to ask about anything you have in mind.</p>
                <form onSubmit={handleSubmit}>

                    <div className="col2">
                        <label className='w100'>
                            First name
                            <input type="text" name='first_name' id='first_name' value={formValues.first_name}
                                placeholder='Enter your first name'
                                onChange={handleChange} required />
                        </label>
                        <label className='w100'>
                            Last name
                            <input type="text" name='last_name' id='last_name' value={formValues.last_name} onChange={handleChange} placeholder='Enter your last name' required />
                        </label>
                    </div>
                    <label  className='w100'>
                        Email
                        <input type="email" name='email' id='email' value={formValues.email} onChange={handleChange} placeholder='yourname@gmail.com' required />
                    </label>
                    <label className='w100'>
                        Message
                        <textarea name="message" id="message" cols="30" rows="10" value={formValues.message} onChange={handleChange} placeholder="Send me a message and I'll reply you as soon as possible..." required />
                    </label>
                    <div className="checkbox_field">
                        <label className='checkbox_input'>
                            <input type="checkbox" id='checkbox' required />
                            <span className="checkmark"></span>
                        </label>
                        <p>You agree to providing your data to Eyonganyoh Teddy Ako who may contact you.</p>
                    </div>
                    <button id='btn__submit'>Send message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
