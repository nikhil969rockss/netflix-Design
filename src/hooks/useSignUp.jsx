import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import { app } from "../utils/Firebase";
import { validate } from "../utils/constants";
import { useNavigate } from "react-router-dom";


const useSignUp = (email, password, setError, setPasswordDetails) => {
  const auth = getAuth(app);
  const navigate = useNavigate()

  function createUser(e) {
    e.preventDefault();

    setPasswordDetails("");
    const checkEmailAndPassword = validate(email, password);
    if (checkEmailAndPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          navigate("/browse")
         
        })
        .catch((err) => {
           setError(err.message.split("/")[1].slice(0, -2));
           navigate("/SignIn")
        });

      setError("");
    } else {
      setError("Check Your Email or Password");
    }
  }
  return { createUser };
};

export default useSignUp;
