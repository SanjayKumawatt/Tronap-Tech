import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.svg";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Filtered Navigation Links (Jo tumne manga tha)
    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT US', path: '/about' },
        { name: 'SERVICES', path: '/services' },
        { name: 'CONTACT', path: '/contact' },
    ];

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* 1. Logo Section */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <Link to="/">
                            <img src={logo} alt="Tronap Logo" className="h-16 w-auto" />            </Link>
                    </div>

                    {/* 2. Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-bold tracking-wide transition-colors duration-200 ${isActive ? 'text-cyan-500' : 'text-gray-600 hover:text-cyan-500'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* 3. Get In Touch Button */}
                    <div className="hidden md:flex items-center">
                        <Link to="/contact">
                            <button className="bg-[#00C2E0] hover:bg-[#00aec9] text-white px-6 py-2.5 rounded-full font-bold shadow-sm transition-all duration-300 transform hover:scale-105">
                                Get In Touch
                            </button>
                        </Link>
                    </div>

                    {/* 4. Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-cyan-500 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block w-full text-center px-3 py-3 rounded-md text-base font-bold ${isActive
                                        ? 'text-cyan-500 bg-cyan-50'
                                        : 'text-gray-700 hover:text-cyan-500 hover:bg-gray-50'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full mt-4">
                            <button className="w-full bg-[#00C2E0] text-white px-6 py-3 rounded-full font-bold">
                                Get In Touch
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;