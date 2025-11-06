import React from 'react';

const TopNav: React.FC = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-white">My App</h1>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-white">Home</a></li>
                    <li><a href="#" className="text-white">About</a></li>
                    <li><a href="#" className="text-white">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default TopNav;
