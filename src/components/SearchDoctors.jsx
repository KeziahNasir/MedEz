import React, { useState } from 'react';
function SearchDoctors({ onSearch }) {
    const [searchParams, setSearchParams] = useState({
      specialty: "",
      location: "",
      availability: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSearchParams((prevParams) => ({
        ...prevParams,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(searchParams);
    };
  
    return (
      <div className="container mx-auto mt-5">
        <h1 className="text-2xl font-bold mb-5">Search Doctors</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
          <input
            type="text"
            name="specialty"
            value={searchParams.specialty}
            onChange={handleInputChange}
            placeholder="Specialty"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            name="location"
            value={searchParams.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            name="availability"
            value={searchParams.availability}
            onChange={handleInputChange}
            placeholder="Availability"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
            Search
          </button>
        </form>
      </div>
    );
  }
  
export default SearchDoctors;
