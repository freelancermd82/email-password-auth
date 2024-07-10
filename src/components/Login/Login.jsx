import React, { useState } from 'react';

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if(!/(?=.*[A-Z])/.test(password)){
            setError('The password must be contain one uppercase');
            return;

        }
        else if(!/(?=.*[a-z])/.test(password)){
            setError('The password must be contain one uppercase');
            return;
        }
        else if(password.length < 6){
            setError('The password must be contain 6 character');
            return
        }

    }



    return (
        <div className='w-50 mt-5 mx-auto'>
            <h4>Please Login</h4>
            <form onSubmit={handleLogin}>
                <div className="form-group mb-4">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" required/>
                </div>
                <div className="form-group mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default Login;