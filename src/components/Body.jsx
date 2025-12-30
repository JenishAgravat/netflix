import Header from "./Header";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utills/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utills/userslice";



const Body = () => {
  const dispatch=useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth , (user) => {
      if (user) {
        const {uid,email,displayName,photoUrl} =user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoUrl:photoUrl}))
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
