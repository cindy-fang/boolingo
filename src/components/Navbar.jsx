import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Demo
                </NavLink>
            </nav>
        </header>
        )
    };

export default Navbar;
