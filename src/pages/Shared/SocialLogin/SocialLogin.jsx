import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const {googleLogin} = useContext(AuthContext)
  const navigate = useNavigate()
const googleHandleLogin = () =>{
  googleLogin()
  .then(result =>{
    const loginUser = result.user;
    const user = {name: loginUser.displayName, email: loginUser.email}
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(() =>{
        navigate('/')
    })
  })
  .catch(error => console.log(error))
}

  return (
    <div>
      <div className="divider"></div>
      <div className="">
        <button onClick={googleHandleLogin} className=" flex items-center gap-1 font-bold justify-center w-full bg-indigo-200 py-2 px-4 rounded-full">
          <FaGoogle /> Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
