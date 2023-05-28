import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


const Login = () => {
  const refCaptacha = useRef(null)
  const [desabled,setDesabled] = useState(true)
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const handleLogin = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
  }
  const handlevalidate = ()=>{
    const value = refCaptacha.current.value
    if (validateCaptcha(value)==true) {
      setDesabled(false)
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
                  ref={refCaptacha}
                  placeholder="write captcha text avobe"
                  className="input input-bordered"
                />
                <button onClick={handlevalidate} className="btn-warning mt-2 btn-xs">validate</button>
              </div>
              <div className="form-control mt-6">
                <button disabled={desabled} className="btn btn-primary">Login</button>
                <div className="my-2 mx-auto">
                  <p>Dont't Have a any account <Link className=" font-bold text-red-800" to={'/signup'}>signUp</Link></p>
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
