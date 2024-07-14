import React, { useRef, useState } from 'react';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();

    const auth = getAuth(app);




    const handleLogin = event => {
        event.preventDefault();
        setError('');
        setSuccess('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('The password must be contain one uppercase');
            return;

        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setError('The password must be contain one lowarcase');
            return;
        }
        else if (password.length < 6) {
            setError('The password must be contain 6 character');
            return
        }

        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         const loggedUser = result.user;
        //         setSuccess("Login is successfully")
        //         console.log(loggedUser);
        //     })
        //     .catch(error => {
        //         setError(error.message);

        //     })

            signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('User login successful')
                setError('');
                console.log(loggedUser);

            })
            .catch(error => {
                setError(error.message);
                console.log(error.message)
            
            })



    }

    const handleResetPassword = event => {
        const email = (emailRef.current.value);
        if(!email){
            alert('Please provide your email address to reset password');
        }
        sendPasswordResetEmail(auth, email)
        .then( () => {
            alert('Please check your email');
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
    }



    return (
        <div className='w-50 mt-5 mx-auto'>
            <h4>Please Login</h4>
            <form onSubmit={handleLogin}>
                <div className="form-group mb-4">
                    <label htmlFor="email">Email address</label>
                    <input type="email" ref={emailRef} name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" required />
                </div>
                <div className="form-group mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
            <p><small>Forget Password? <button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small></p>
            <p>New to this website? <small><Link to="/register">Register</Link></small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>

        </div>
    );
};

export default Login;