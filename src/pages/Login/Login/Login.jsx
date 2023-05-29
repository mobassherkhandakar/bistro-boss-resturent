import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../../Provider/AuthProvider";


const Login = () => {
const location = useLocation()
console.log(location.state?.from?.pathname);
const navigate = useNavigate()
  const [desabled,setDesabled] = useState(true)
  const {loginUser} = useContext(AuthContext)
  const from = location.state?.from?.pathname || '/'
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const handleLogin = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    loginUser(email, password)
    .then(result=>{
      const loginUser = result.user;
      navigate(from)
      console.log(loginUser);
    })
  }
  const handlevalidate = (e)=>{
    const value = e.target.value;
    if (validateCaptcha(value)==true) {
      setDesabled(false)
      return
  }

  else {
      setDesabled(true)
  }
    
  }
  return (
    <div>
      <div className="flex items-center  min-h-screen bg-base-200">
        <div className="flex justify-between flex-col  md:flex-row lg:flex-row-reverse ">
          <div className="w-full md:w-1/2 ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card mx-auto w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handlevalidate}
                  placeholder="write captcha text avobe"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" disabled={desabled} className="btn btn-primary">Login</button>
                <div className="my-1 mx-auto">
                  <p>Do not Have a any account <Link className=" font-bold text-red-800" to={'/signup'}>signUp</Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
