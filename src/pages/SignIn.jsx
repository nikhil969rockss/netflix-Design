import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import useSignIn from "../hooks/useSignIn";
import Header from "../components/Body/Header";

const Button = ({ children, className = "", type = "", onClick = null }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} w-full my-4 h-12 rounded-lg transition-all duration-300 select-none`}
    >
      {children}
    </button>
  );
};
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feature, setFeature] = useState("");
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setVisible(true);
    setShowPassword((prev) => !prev);
  }
  function handleFeature() {
    setFeature("This feature is not yet supported");
    setTimeout(() => {
      setFeature("");
    }, 3000);
  }

  const { handleSignIn } = useSignIn(email, password, setError);
  return (
    <div>
      <Header/>
      <form
        onSubmit={(e) => handleSignIn(e)}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 rounded-lg text-white p-12 md:w-[450px] lg:w-[450px] xl:w-[450px] w-full"
      >
        <h1
          className="text-3xl font-[900] my-7
        "
        >
          Sign In
        </h1>
        <div className="flex gap-7 flex-col"></div>
        <div className="flex flex-col gap-7">
          <input
            className="h-14 relative px-3 bg-transparent placeholder:absolute focus:placeholder:top-2 focus:placeholder:text-sm transition-all duration-200 w-full rounded-md border-[0.1px] border-white "
            type="email"
            required
            placeholder="Email or mobile number"
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
              onFocus={() => setVisible(true)}
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
        </div>
        {error && <p className="mt-3 font-semibold text-red-500">{error}</p>}
        <Button className="bg-[hsl(357,92%,46%)] hover:bg-[hsl(357,92%,40%)] active:bg-[hsl(357,92%,38%)] text-lg">
          {" "}
          Sign In
        </Button>

        <p className="text-center text-lg text-[hsl(0,1%,72%)] ">OR</p>

        {feature && <p>{feature}</p>}

        <Button
          type="button"
          onClick={handleFeature}
          className="bg-[hsl(51,6%,23%)] hover:bg-[hsl(51,6%,20%)] active:bg-[hsl(51,6%,17%)]  text-lg "
        >
          Use a Sign-in code
        </Button>

        <p className="text-center hover:underline cursor-pointer hover:text-[#B4B4B4]">
          Forget password?
        </p>

        <div>
          <input
            className="accent-slate-200 mt-4 "
            type="checkbox"
            name=""
            id="rememberMe"
          />
          <label className="select-none ml-2" htmlFor="rememberMe">
            Remember me
          </label>
        </div>

        <p className="mt-3">
          <span className="text-[#B4B4B4]">New to Netflix?</span>{" "}
          <span className="hover:underline cursor-pointer select-none">
            <Link to={"/Signup"}>Sign up now.</Link>
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
