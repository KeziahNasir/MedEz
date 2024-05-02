import React, { useState } from "react";
import { getFirestore } from "firebase/firestore";

const DoctorsCard = () => {
  const [form, setForm] = useState({
    avatar: "",
    name: "",
    email: "",
    specialization: "",
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await getFirestore.collection("doctors").doc(currentDoctorId).set(form);
      alert("Profile updates successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 flex gap-2">
        <label htmlFor="avatar">Upload Avatar</label>
        <input
          type="file"
          avatar="avatar"
          id="avatar"
          value={form.avatar}
          onChange={handleInputChange}
          className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Avatar"
        />
      </div>

      <div className="mb-4 flex gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Name"
        />
      </div>
      <div className="mb-4 flex gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Email"
        />
      </div>
      <div className="mb-4 flex gap-2">
        <label htmlFor="specialization">Specialization</label>
        <input
          type="text"
          specialization="specialization"
          id="specialization"
          //   value={form.specialization}
          onChange={handleInputChange}
          className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Specialization"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
      >
        Update Profile
      </button>
    </form>
  );
};

export default DoctorsCard;
