// src/TopNav.tsx
import React from 'react';

const TopNav = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex justify-between items-center">
                <a href="/" className="text-white">Home</a>
                <a href="/about" className="text-white">About</a>
            </div>
        </nav>
    );
};

export default TopNav;
