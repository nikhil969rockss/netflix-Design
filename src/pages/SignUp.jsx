import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import useSignUp from "../hooks/useSignUp";
import Header from "../components/Body/Header";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`${className} w-full my-4 h-12 rounded-lg transition-all duration-300 select-none`}
    >
      {children}
    </button>
  );
};
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDetails, setPasswordDetails] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { createUser } = useSignUp(
    email,
    password,
    setError,
    setPasswordDetails
  );

  function handleShowPassword() {
    setVisible(true);
    setShowPassword((prev) => !prev);
  }

  function handlePasswordDetails() {
    setPasswordDetails(
      "password must be at least 8 characters long and contain 1 uppercase letter, 1 lowercase letter and 1 special character"
    );
    setVisible(true)
  }

  return (
    <div>
      <Header/>
      <form
        onSubmit={(e) => createUser(e)}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 rounded-lg text-white p-12 md:w-[450px] lg:w-[450px] xl:w-[450px] w-full"
      >
        <h1 className="text-3xl font-[900] my-7">Sign Up</h1>
        <div className="flex gap-7 flex-col">
          <div className="flex gap-4 ">
            <input
              className="h-14 w-full relative px-3 bg-transparent border-[0.1px] rounded-md border-white  placeholder:absolute focus:placeholder:top-2 focus:placeholder:text-sm transition-all duration-200 "
              type="text"
              placeholder="First name"
              required
              onFocus={() => setVisible(false)}
            />
            <input
              className="h-14 w-full relative px-3 bg-transparent border-[0.1px] rounded-md border-white  placeholder:absolute focus:placeholder:top-2 focus:placeholder:text-sm transition-all duration-200 "
              type="text"
              placeholder="Last name"
              required
              onFocus={() => setVisible(false)}
            />
          </div>
          <input
            className="h-14 w-full relative px-3 bg-transparent border-[0.1px] rounded-md border-white  placeholder:absolute focus:placeholder:top-2 focus:placeholder:text-sm transition-all duration-200 mb-7 "
            type="number"
            placeholder="Phone number"
            required
            onFocus={() => setVisible(false)}
          />
        </div>
        <div className="flex flex-col gap-7">
          <input
            className="h-14 relative px-3 bg-transparent border-[0.1px] rounded-md border-white  placeholder:absolute focus:placeholder:top-2 focus:placeholder:text-sm transition-all duration-200 "
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setVisible(false)}
          />
          <div className=" relative  flex justify-between items-center ">
            <input
              className="h-14 px-3 pr-10 bg-transparent  placeholder:absolute focus:placeholder:top-2 focus:placeholder:text-sm transition-all duration-200 flex-1 rounded-md border-[0.1px] border-white"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => handlePasswordDetails()}
              onBlur={()=>setPasswordDetails("")}
            />
            {visible && (
              <button
                onClick={handleShowPassword}
                type="button"
                className="absolute right-3"
              >
                {showPassword ? <IoEyeOffSharp /> : <FaEye />}
              </button>
            )}
          </div>
          <p className="text-green-700">{passwordDetails}</p>
          {error && <p className="font-semibold text-red-700">{error}</p>}
        </div>
        <Button className="bg-[hsl(357,92%,46%)] hover:bg-[hsl(357,92%,40%)] active:bg-[hsl(357,92%,38%)] text-lg">
          {" "}
          Sign Up
        </Button>

        <p className="mt-3">
          <span className="text-[#B4B4B4]">Already a Member</span>{" "}
          <span className="hover:underline cursor-pointer select-none">
            <Link to={"/"}>Sign In</Link>
          </span>
        </p>
        <p className="mt-4 text-sm text-[#8C8C8C]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="hover:underline cursor-pointer select-none text-[#0569DA]">
            Learn more.
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
