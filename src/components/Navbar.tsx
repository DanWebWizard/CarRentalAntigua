import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger and close

const Navbar: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <nav>
            <img src="images/logo.jpg" alt="Logo" className="logo" />
            <button className="nav-toggle" onClick={toggleNav}>
                {isNavOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul className={isNavOpen ? 'nav-open' : ''}>
                <li><a href="#home">Home</a></li>
                <li><a href="#photos">Photos</a></li>
                <li><a href="#price-list">Price List</a></li>
                <li><a href="#whats-included">What's Included</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
