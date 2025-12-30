import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utills/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="absolute w-screen px-6 py-4 bg-linear-to-b from-black z-20 flex justify-between">
        <img
          className="w-40"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        { user && (<div className="flex p-2">
          <img
            className="w-12 h-12"
            src={user?.photoUrl}
            alt="user icon"
          />
          <button onAuxClick={handleSignout} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>)}
      </div>
    </>
  );
};

export default Header;
