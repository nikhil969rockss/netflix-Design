import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { app } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const useSignIn = (email, password, setError) => {
  const navigate = useNavigate()

  const auth = getAuth(app);
  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        navigate("/browse")
       
      })
      .catch((err) => {
        console.log(err.message.split("/")[1]?.slice(0, -2));
        setError(err.message.split("/")[1]?.slice(0, -2));
        navigate("/")
      });
  }
  return { handleSignIn };
};

export default useSignIn;
