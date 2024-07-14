import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';




const auth = getAuth(app);


const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        //  console.log(event.target.email.value)
        console.log(email, password);
        // validate
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase')
            return;
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setError('The password must be contain a single digit from 1 to 9');
            return;
        }
        else if(!/(?=.*[a-z])/.test(password)){
            setError('The password must be contain one lowercase letter')
        }

        // create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            event.target.reset();
            setSuccess('User has been created successfully');
            sendVerificationEmail(result.user);

        })
        .catch(error => {
            console.error(error.message);
            setError(error.message)
           
        })
    }

    const sendVerificationEmail = (user) => {
        sendEmailVerification(user)
        .then(result => {
            console.log(result);
            alert('Please verify your email address');
        })
    }


    const handleEmailChange = (event) =>{
        console.log(event.target.value);
        // setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) =>{
        console.log(event.target.value);
        
    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 ps-2 rounded' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' required/>
                <br />
                <input className='w-50 mb-4 ps-2 rounded' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p><small>Already have an account? Please <Link to="/login">Login</Link></small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;