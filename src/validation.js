const validation = (values) => {
   
    let errors = {}

    if (!values.first_name) {
        errors.first_name = "Please enter your first name"
    }
    if (!values.last_name) {
        errors.last_name="Please enter your last name"
    }
    if (!values.email) {
        errors.email = "Please enter a valid email"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is Invalid"
    }
    if (!values.message) {
        errors.message="Please enter a message"
    }

    return errors;
    }

 
export default validation;