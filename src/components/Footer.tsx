import React from 'react';
import './Footer.css'; // Optional, for custom footer styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Antigua Car Rentals. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
