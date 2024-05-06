import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setAboutData(response.data);
            })
            .catch(error => {
                console.error('Error fetching About Us data:', error);
            });
    }, []);

    
    return (
        <div className="container mx-auto min-h-[100vhnp] mt-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            {aboutData ? (
                <div>
                    <h2 className="text-xl font-semibold mb-2">{aboutData.title}</h2>
                    <p className="text-gray-700">{aboutData.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            
        </div>
    );
};

export default About; 
