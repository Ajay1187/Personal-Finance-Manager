import React, { useState } from 'react';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.style.backgroundColor = darkMode ? '#f4f7fa' : '#121212';
        document.body.style.color = darkMode ? '#000' : '#fff';
    };

    return (
        <div className="App">
            <header>
                <h1>Personal Finance Manager</h1>
                <button onClick={toggleDarkMode}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </header>
        </div>
    );
}
