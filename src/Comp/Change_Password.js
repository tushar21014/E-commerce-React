import React, { Component, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import a from '../Context/userContext';

const Change_Password = () => {
  const context = useContext(a);
  let navigate = useNavigate();
  const [state, setstate] = useState("")
  const [pass, setPass] = useState({ id: "", epass: "" })
  const { editPass,getDetail,detail} = context
  
      const handleClick = (e) => {
        getDetail()
        console.log("Updating the pass ", pass)
        editPass(detail._id, pass.epass);
        navigate('/Home')
    }

    const check = () => {
      var pass = document.validation.epass.value;
      var cpass = document.validation.cpass.value;

      if (pass !== cpass) {
        alert("The password doesn't match");
      }
      else
      alert("Password changed successfully");
    }
  return (
    <div>

      <div >
        <h2>New Password</h2>
        <form name='validation' onSubmit={handleClick}  >
          <div id="Create New Password"></div>
          <input type="password" name="epass" placeholder="Password" required minLength='5' onChange={e => setstate(e.target.value)} />

          <h2>Confirm Password</h2>
          <input type="password" name="cpass" placeholder="Confirm Password" required minLength='5' />
          <input className="btn btn-primary" type="submit" name='submit' value="Submit" onClick={check} />
        </form>


      </div>
    </div>
  )
}

export default Change_Password