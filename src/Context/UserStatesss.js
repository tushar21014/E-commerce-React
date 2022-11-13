import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import a from './userContext'
const host = "http://localhost:5001"
const UserStatesss = (props) => {
  const initialstate = []
  const [pass, setPass] = useState(initialstate)
  const [detail, setDetail] = useState(initialstate)

  const getDetail = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setDetail(json);
    console.log(detail);
    
  }

  // const navigate = useNavigate();
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


  const editPass = async (id,pass) => {
    const response = await fetch(`${host}/api/auth/updatetoken/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ pass }),
    });

    let newDetails = JSON.parse(JSON.stringify(pass))
    for (let index = 0; index < pass.length; index++) {
        const element = newDetails[index];
        if (element._id === id) {
            newDetails[index].pass = pass
            break;
        }
    }
    setPass(newDetails);
}

const [cartProducts, setCartProducts] = useState([]);

// editPass("634847e3f1a5aac2b9291b80", "hkhwah")
  return (

    <a.Provider value={{ detail, setDetail, getDetail, editPass,pass,setPass,findUser}}>
      {props.children}
    </a.Provider>
  )
}

export default UserStatesss