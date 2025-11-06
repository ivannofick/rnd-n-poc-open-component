// src/components/TopNav.tsx
import React from 'react';

const TopNav = () => {
    return (
        <nav className="bg-blue-500 p-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-2xl font-bold">MyApp</a>
                <div className="space-x-4">
                    <a href="/home" className="text-white">Home</a>
                    <a href="/about" className="text-white">About</a>
                    <a href="/contact" className="text-white">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
