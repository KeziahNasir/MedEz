import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!email.trim()) {
      errors.email = "Please fill in your email";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Login successful!");
    }
   
    signInWithEmailAndPassword(
      auth,
     showPassword.emailAddress,
      showPassword.password
    )
      .then(async (userData) => {
        const user = userData.user;
        console.log(user);
      

        if (user) {
          const newUser = await addDoc(collection(db, "users") ,showPassword);
          console.log(newUser);
            navigate("/home")
        }
      })
      .catch((error) => console.log(error));

  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex-wrap justify-center items-center">
        <h2 className="text-center font-bold font-sans text-2xl text-white">
          Login To Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            className="mt-4 py-6 px-8 border border-gray-400 w-[600px] flex justify-between items-center rounded-2xl"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <div>
            <input
            className="mt-4 py-6 px-8 border border-gray-400 w-[600px] flex justify-between items-center rounded-2xl"
            type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="pr-3 cursor-pointer text-white"
              onClick={handleShowPassword}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <div className="flex items-center mt-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <p className="text-[#45C9A1]">Forgot Password?</p>
          </div>
          <div>
            <button
              type="submit"
              className="text-2xl border border-gray-400 bg-[#1A8EFD] py-4 px-6 rounded-full gap-6 text-white text-decoration-color-white flex justify-center items-center"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex gap-3 items-center mt-6">
          <div className="border-b-2 border-gray-700 w-1/2"></div>
          <div className="text-[#45C9A1]">or</div>
          <div className="border-b-2 border-gray-700 w-1/2"></div>
        </div>
        <div className="text-2xl mt-6  py-4 px-6  border border-gray-400 w-[600px] flex  items-center rounded-2xl text-blue-800 justify-center">
          <FcGoogle size={24} />
          <p>SignUp With Google</p>
        </div>
        <p className="font-sans text-2xl mt-6">
          Don't Have An Account Yet?{" "}
          <span className="text-[#45C9A1]">Sign Up Free</span>
        </p>
      </div>
    </div>
  );
}
export default Login;
