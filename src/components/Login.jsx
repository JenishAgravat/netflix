import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utills/validation";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick=()=>{
    //form validation

    const message=checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    
    //Sign in / Sign up

    
    
  }

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6d631aa6-567d-46ef-a644-b5b00e4334d2/web/IN-en-20251215-TRIFECTA-perspective_f1cab02a-e42b-4913-a7d9-c5fe0f94f68d_medium.jpg"
          alt=""
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="bg-black p-12 absolute my-30 w-3/12 mx-auto right-0 left-0 rounded-2xl opacity-80 text-white">
        <h1 className="font-bold text-4xl text-white m-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 m-4 bg-gray-500 rounded-2xl"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Addreess"
          className="w-full p-4 m-4 bg-gray-500 rounded-2xl"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="w-full p-4 m-4 bg-gray-500 rounded-2xl"
        />
        <p className="text-red-500 text-lg">{errorMessage}</p>
        <button className="p-4 m-4 w-full cursor-pointer bg-red-500 rounded-2xl"onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 m-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New To Netflix? Sign Up"
            : "Already Registerd? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
