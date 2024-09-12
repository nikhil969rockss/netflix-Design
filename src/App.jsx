import { Routes, Route, useNavigate } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Browse from "./pages/Browse";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, clearUser } from "./utils/UserSlice";
import { LOGIN_USER_LOGO } from "./utils/constants";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, navigate to browse page
        setUserData(user);

        updateProfile(auth.currentUser, {
          displayName: user.email.split("@")[0],
          photoURL: LOGIN_USER_LOGO,
        });
        const { displayName, photoURL } = user;
        dispatch(addUser({ displayName, photoURL }));
        navigate("/browse");

       
        // ...
      } else {
        // User is signed out, navigate to sign in page
      
        setUserData(null);

        // ...

        dispatch(clearUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/Signup" element={<SignUp />}></Route>
      <Route path="/browse" element={<Browse />}></Route>
    </Routes>
  );
};

export default App;
