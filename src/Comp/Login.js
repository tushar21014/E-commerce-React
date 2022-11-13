import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import firebase from './Firebase'
import ForgotPassword from './ForgotPassword';




const Login = (props) => {


    const [credentials, setCredentials] = useState({ email: "", pass: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5001/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, pass: credentials.pass })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate('/Home')
            alert("Logged in Successfully")

        }
        else {
            alert("Invalid Credentials")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container my-3'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange} placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="pass" value={credentials.pass} name='pass' onChange={onChange} placeholder="Password" />
                </div>
                
                <div className="form-group">
                    <Link to='/ForgotPassword'>Forgot Password</Link>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Login