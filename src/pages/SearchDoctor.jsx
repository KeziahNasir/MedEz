import React, { useState } from 'react';
import SearchDoctors from '../components/SearchDoctors';

const SearchDoctor = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearchDoctors = async (searchParams) => {
        setLoading(true);
        try {
            // Simulating API call to fetch doctors based on searchParams
            const response = await fetch(
                `https://example.com/api/doctors?specialty=${searchParams.specialty}&location=${searchParams.location}&availability=${searchParams.availability}`
            );
            if (!response.ok) {
                throw new Error('Failed to fetch doctors');
            }
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto mt-5">
            <h1 className="text-2xl font-bold mb-5">Appointments</h1>
            <SearchDoctors onSearch={handleSearchDoctors} />

            {loading && <p className="text-center">Loading...</p>}
            {searchResults.length > 0 ? (
                <div className="mt-5">
                    <h2 className="text-lg font-semibold mb-3">Search Results</h2>
                    <ul>
                        {searchResults.map((doctor) => (
                            <li key={doctor.id}>
                                <p>Name: {doctor.name}</p>
                                <p>Specialty: {doctor.specialty}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="mt-5 text-center">No results found.</p>
            )}
        </div>
    );
};

export default SearchDoctor;

