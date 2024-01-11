import React, { useState, useEffect } from 'react';

const SearchBar = () => {
const [searchTerm, setSearchTerm] = useState('');
const [suggestions, setSuggestions] = useState([]);

useEffect(() => {
    if (searchTerm.length > 0) {
        fetchData(searchTerm).then(data => {
        setSuggestions(data);
        });
    } else {
        setSuggestions([]);
    }
    }, [searchTerm]);

    function fetchData(searchTerm) {
    const endpoint = `https://jsonplaceholder.typicode.com/posts?title_like=${searchTerm}`;

    return fetch(endpoint)
        .then(response => response.json())
        .then(data => data.map(item => item.title));
    }

    return (
    <div className="container">
        <input
        id="search"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        />
        <ul id="suggestions">
        {suggestions.map(item => (
            <li key={item}>{item}</li>
        ))}
        </ul>
    </div>
    );
};

export default SearchBar;
