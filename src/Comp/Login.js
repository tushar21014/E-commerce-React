import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div className='container'>
                <div className='h1 text-center'>Sign Up</div>
            <div>
                <form action='http://localhost/project/src/Comp/signup.php' method='post'>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name:</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" name='signupname'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='signupemail'/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Phone Number:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile Number" name='signupphone'/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='signuppass' placeholder="Create Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleConfirmPassword1" placeholder="Confirm Password" name='signupcon'/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" name='submit' className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>
        )
    }
}

export default Login