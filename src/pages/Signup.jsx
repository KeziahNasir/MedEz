import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function Register() {
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(e) {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  }

  function handleSignUp() {
    console.log(confirmPassword);
    if (formInput.firstName === "") {
      setErrorMessage("KIndly fill in the first name");
    } else if (formInput.lastName === "") {
      setErrorMessage("KIndly fill in the last name");
    } else if (formInput.emailAddress === "") {
      setErrorMessage("KIndly fill in the email address");
    } else if (formInput.phoneNumber === "") {
      setErrorMessage("KIndly fill in the Phone number");
    } else if (formInput.password === "") {
      setErrorMessage("KIndly fill in the Password");
    } else if (confirmPassword === "") {
      setErrorMessage("KIndly confirm your password");
    } else if (confirmPassword !== formInput.password) {
      setErrorMessage("Passwords do not match");
    } else if (formInput.password.length < 8) {
      setErrorMessage("Password should have a minimum of 8 characters");
    } else {
      setErrorMessage("");
      createUserWithEmailAndPassword(
        auth,
        formInput.emailAddress,
        formInput.password
      )
        .then(async (userData) => {
          const user = userData.user;
          console.log(user);

          if (user) {
            const newUser = await addDoc(collection(db, "users"), formInput);
            console.log(newUser);
          }
        })
        .catch((error) => console.log(error));
    }
  }
  return (
    <div className="container mx-auto flex gap-7">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col flex-1 border gap-10">
          <h2 className="font-bold text-6xl mt-8">Create An Account</h2>
          <input
            type="text"
            placeholder=" First Name"
            className="btn border   border-gray-400 py-4 px-[4em] rounded-full cursor-pointer   my-4 gap-4"
            name="firstName"
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder="Last Name"
            className="btn border   border-gray-400 py-4 px-[4em] rounded-full cursor-pointer   "
            name="lastName"
            onChange={handleInputChange}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-400 text-black rounded-full px-[4em] py-8"
            name="emailAddress"
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="border  border-gray-400 rounded-full px-[4em] py-8"
            name="phoneNumber"
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border  border-gray-400 rounded-full px-[4em] py-8"
            name="password"
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border  border-gray-400 rounded-full px-[4em] py-8"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="text-red-600">{errorMessage}</p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input type="radio" />
              <p>Sign-up as Doctor</p>
            </div>
            <div className="flex gap-2">
              <input type="radio" />
              <p>Sign-up as Patient</p>
            </div>
          </div>

          <button
            className="border  border-gray-400 bg-[#45C9A1] rounded-full text-white px-[4em] py-6 font-bold text-2xl"
            onClick={handleSignUp}
          >
            Create Account
          </button>
          <p className="border-b-2">OR</p>
          <p className="flex justify-center">
            Already Have An Account?{" "}
            <a href="/login" className="text-[#45C9A1]">
              sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;
