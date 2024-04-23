import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
function Login() {
  const [showPassword, setShowPassword] = useState(true);
  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }
return (
  <>
    <div className="w-[100%] flex gap-[2em]">
    
      <div className="w-[40%] flex flex-col gap-[4em] my-[2em]">
        <h1 className="flex justify-center text-[2.5em] font-bold">
          Login to your Account
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="border-2  px-[5em] py-8 rounded-full shadow-lg"
        />
        <div
          className="flex border-3 rounded-full shadow-lg justify-between pr-4  items-center
            "
        >
          <input
            type={showPassword?"password":"text"}
            placeholder="Password"
            className="px-[5em] py-8 flex-1 outline-none"
          />
          <div onClick={handleShowPassword}>
            {showPassword ?  <FaEyeSlash />:<FaEye /> }
          </div>
        </div>
        <div className="flex gap-4 justify-between">
          <div className="flex gap-5 items-center justify-center">
            <div className="border-2 w-[20px] h-[20px] shadow-lg"></div>
            <p className="text-[20px]">Remember me</p>
          </div>
          <p className="text-[#45C9A1] text-[20px]">Forgot Password?</p>
        </div>
        <button className="border-none bg-[#45C9A1] rounded-full px-[2em] py-8 font-bold text-white ">
          Sign In
        </button>
        <div className="flex gap-3  items-center">
          <div className="border-b-2 border-gray-700 w-[300px]"></div>
          <div>OR</div>
          <div className="border-b-2 border-gray-700 w-[300px]"></div>
        </div>
        <div className="flex gap-10 justify-center  items-center  text-blue-600 flex-col sm:flex-row border border-gray-500 shadow-[0_0_5px_lightgray] mt-10 mb-10 bg-white rounded-full px-[4em] py-4">
          <img
            src="src/assets/images/google-color-icon.svg"
            width={40}
            className="pl-2"
          />
          <input
            type="text"
            placeholder="Sign Up With Google"
            className="text-3xl text-blue-600"
          />
        </div>
        <div className="flex justify-center text-[20px]">
          Dont Have An Account Yet?
          <a href="/signup" className="text-[#45C9A1]">
            Sign Up Free
          </a>
        </div>
      </div>
    </div>
  </>
)
}
export default Login;