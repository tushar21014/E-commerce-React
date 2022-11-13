import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Signup = (props) => {
    const [credentials, setCredentials] = useState({name : "", email: "", pass: "",phone : ""}) 
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        const {name , email, pass, phone } = credentials;
        e.preventDefault();
        const response = await fetch("http://localhost:5001/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name,email: credentials.email, pass: credentials.pass , phone : credentials.phone})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate('/Login')
            // alert("Account Created Successfully" , "Success")
        }
        else{
            // props.showAlert("Invalid Details" , "Danger")
            alert("Invalid Details")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }



  return (
    <div>
        
        <div className='container my-4'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="name" onChange={onChange} name='name' placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={onChange} name='email' placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" id="phone" name='phone' onChange={onChange} placeholder="Mobile Number" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" name='pass' onChange={onChange} placeholder="Password" required minLength={5}/>
                </div>
                
                
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Signup