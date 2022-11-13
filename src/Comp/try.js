import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import a from '../Context/userContext'
import firebase from './Firebase'
const host = "http://localhost:5001"
const handleChange = (e) => {
    const { name, value } = e.targets
    const [State, setState] = useState("");
    setState({
        [name]: value
    })
}
const ForgotPassword = () => {


    const configureCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
                console.log("Recaptca varified")
            },
            defaultCountry: "IN"
        });
    }


    const onSignInSubmit = (e) => {
        e.preventDefault()
        configureCaptcha()
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

    const onSubmitOTP = (e) => {
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
            const {navigate} = a;
            
        }).catch((error) => {
                console.log("Step - 5")
                console.error(error);
                alert("User Not Verified")

            });
    }
    return (
        <div>
            <div >
                <center>
                    <h2>Login Form</h2>
                    <form onSubmit={onSignInSubmit}>
                        <div id="sign-in-button"></div>
                        <input type="number" name="mobile" placeholder="Mobile number" required onChange={handleChange} />
                        <button type="submit">Submit</button>
                    </form>

                    <h2>Enter OTP</h2>
                    <form onSubmit={onSubmitOTP}>
                        <input type="number" name="otp" placeholder="OTP Number" required onChange={handleChange} />
                        <button type="submit">Submit</button>
                    </form>
                </center>
            </div>
        </div>
    )
}

export default ForgotPassword
