import React, {useState, useEffect} from 'react';
import './contactme.css';
import validation from '../../validation';

function ContactMe({ submitForm }) {
    
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const [checkState, setCheckState] = useState(false);
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            setDataIsCorrect(true);
            submitForm(true);
            setErrors(validation(values));
        }
    }, [errors]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        console.log(values);
    }

    const changeState = () => {
        // if (e.target.checked) {
        //     console.log("Is checked")
        // } else {
        //     console.log("Is not checked")
        // }
        setCheckState(!checkState);
    }

    return (
        <div className='contactme'>
            <div className="container">
                <h2>Contact Me</h2>
                <p className='subtext'>Hi there, contact me to ask about anything you have in mind.</p>
                <form onSubmit={handleSendMessage}>
                    <div className="col2">
                        <label className='w100'>
                            First name
                            <input
                                className='change'
                                type="text"
                                name='first_name'
                                id='first_name'
                                value={values.first_name}
                                placeholder='Enter your first name'
                                onChange={handleChange}
                                required
                            />
                            {errors.first_name && <p className="error">{errors.first_name}</p>}
                        </label>
                        <label className='w100'>
                            Last name
                            <input
                                className='change'
                                type="text"
                                name='last_name'
                                id='last_name'
                                value={values.last_name}
                                onChange={handleChange}
                                placeholder='Enter your last name'
                                required
                            />
                            {errors.last_name && <p className="error">{errors.last_name}</p>}
                        </label>
                    </div>
                    <label  className='w100'>
                        Email
                        <input
                            className='change'
                            type="email"
                            name='email'
                            id='email'
                            value={values.email}
                            onChange={handleChange}
                            placeholder='yourname@gmail.com'
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </label>
                    <label className='w100'>
                        Message
                        <textarea
                            className='change'
                            name="message"
                            id="message"
                            cols="30" rows="10"
                            value={values.message}
                            onChange={handleChange}
                            placeholder="Send me a message and I'll reply you as soon as possible..."
                            required
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                    </label>
                    <div className="checkbox_field">
                        <label className='checkbox_input'>
                            <input
                                type="checkbox"
                                value={checkState}
                                onChange={changeState}
                                id='checkbox'
                                required />
                            <span className="checkmark"></span>
                        </label>
                        <p>You agree to providing your data to Eyonganyoh Teddy Ako who may contact you.</p>
                    </div>
                    <button id='btn__submit' disabled={!checkState}>Send message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;


// JUNK
// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [message, setMessage] = useState("");

// onChange={(e) => setFirstName(e.target.value)}
// value = { firstName }

// useEffect(() => {
//     if (Object.keys(errors).length !== 0) {
//         setButtonValue(false);
//         // setErrors(validation(values))
//         setErrors(validation(values));
//     } else if (Object.keys(errors).length === 0) {
//         setButtonValue(true);
//     }
// }, [values]);