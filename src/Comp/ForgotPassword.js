import React, { Component, useEffect } from 'react'
import { useNavigate, Redirect } from 'react-router-dom'
import a from '../Context/userContext'
import firebase from './Firebase'
const host = "http://localhost:5001"
export class ForgotPassword extends Component {
    
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        // return navigate('/Home')
    }


    configureCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                this.onSignInSubmit();
                console.log("Recaptca varified")
            },
            defaultCountry: "IN"
        });
    }


    onSignInSubmit = (e) => {
        e.preventDefault()
        this.configureCaptcha()
        const phoneNumber = "+91" + this.state.mobile
        console.log(phoneNumber)
        const appVerifier = window.recaptchaVerifier;

        const findUser = async(phone,res,req) => {
            const response = await fetch(`${host}/api/auth/find/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone }),
            });
            const json = await response.json;
            console.log(json)
        }
        
        findUser(this.state.mobile)


        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log("OTP has been sent")
                alert("OTP has been sent")

                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                console.log("SMS not sent")
            });
    }

    onSubmitOTP = (e) => {
        e.preventDefault()
        const code = this.state.otp
        console.log(code)
        console.log("Step - 1")
        
        if (window.confirmationResult.confirm(code))
        window.confirmationResult.confirm(code).then((result) => {
            console.log("Step - 2")
            // User signed in successfully.
            const user = result.user;
            console.log(JSON.stringify(user))
            console.log("Step - 3")
            alert("User is verified")
            // useEffect(() => {
            //     console.log("Step - 4")
            //     let navigate = useNavigate()
            //     navigate("Change_Password")
            // }, [])
            
            
        }).catch((error) => {
                console.log("Step - 5")
                console.error(error);
                alert("User Not Verified")

            });
    }

    render() {
        return (
            <div>
                <div >
                    <center>
                        <h2>Login Form</h2>
                        <form onSubmit={this.onSignInSubmit}>
                            <div id="sign-in-button"></div>
                            <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange} />
                            <button type="submit">Submit</button>
                        </form>

                        <h2>Enter OTP</h2>
                        <form onSubmit={this.onSubmitOTP}>
                            <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange} />
                            <button type="submit">Submit</button>
                        </form>
                    </center>
                </div>
            </div>
        )
    }
}

export default ForgotPassword