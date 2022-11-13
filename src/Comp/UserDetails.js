import React, { useContext, useEffect } from 'react'
import a from '../Context/userContext';
import { Link, useNavigate } from 'react-router-dom';



const UserDetails = () => {
  let navigate = useNavigate();

  const context = useContext(a);
  const { getDetail, detail, setDetail } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getDetail()
    }
    else {
      navigate("/Login");
    }
  }, [])

  return (
    <div className='container my-3'>
      <div className='row'>
        <div className='col-2'>
          Name:<br />
          Email:<br />
          Mobile Number:<br />
          Password:<br />
        </div>
        <div className='col-4'>
          <input type="text" disabled value={detail.name} /><br />
          <input type="text" disabled value={detail.email} /><br />
          <input type="text" disabled value={detail.phone} /><br />
          <input type="password" disabled value={detail.pass} /><br />
          <Link to ='Change_Password'><input className="btn btn-primary" type="text" name='changePassword' value="Change Password"  /></Link>

        </div>
      </div>
    </div>
  )
}

export default UserDetails