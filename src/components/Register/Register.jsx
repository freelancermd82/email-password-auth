import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        //  console.log(event.target.email.value)
        console.log(email, password);
    }


    const handleEmailChange = (event) =>{
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) =>{
        console.log(event.target.value);
    }


    return (
        <div>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;