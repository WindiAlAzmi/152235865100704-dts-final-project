import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../config/firebase';

const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async(event)  => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    

    try {
      const { user} = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/");
    }catch(error) {
       setErrorMessage(error.message);
    }
  }
  return (
    <div className="w-full p-6 md:p-0 flex flex-row mx-auto bg-slate-100 justify-center ">
      <div className="bg-white mx-auto mt-20 w-full md:w-1/2 drop-shadow-lg flex flex-col gap-6 mb-10 p-20 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="w-full font-bold text-2xl text-center ">Register</h1>
          <div className="flex flex-col gap-2">
            <label className="text-base text-gray-800 text-left">Email</label>
            <input name="email" type="email" className="focus:outline-win-4 focus:ring-inherit bg-slate-100 rounded-lg text-gray-800 text-left mb-3" placeholder="Enter your email" />
            <label className="text-base text-gray-800 text-left">Password</label>
            <input name="password" type="password" className=" focus:outline-win-4 focus:ring-inherit rounded-lg bg-slate-100 text-gray-800 text-left mb-5" placeholder="Enter your password" />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r font-bold from-win-3 to-win-4 text-gray-800 rounded-full p-2 drop-shadow-lg text-center text-md">
            Sign Up
          </button>

          <p>{errorMessage}</p>
        </form>
        <button onClick={() => navigate("/login")} type="submit" className="bg-white  font-bold border border-gray-800 text-gray-800 p-2 rounded-full drop-shadow-xl text-center  text-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
