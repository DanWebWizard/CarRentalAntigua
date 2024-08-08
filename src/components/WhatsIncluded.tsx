// src/components/WhatsIncluded.tsx
import React from 'react';
import { FaPhoneAlt, FaRoad, FaCar, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from react-icons

const WhatsIncluded: React.FC = () => {
    return (
        <section id="whats-included">
            <h2>What's Included</h2>
            <ul id="whats-included-ul">
                <li><FaPhoneAlt /> 24-hour emergency services</li>
                <li><FaCar /> Unlimited mileage</li>
                <li><FaRoad /> Free delivery and pickup</li>
                <li><FaMapMarkerAlt /> Antigua and Barbuda road map</li>
            </ul>
        </section>
    );
}

export default WhatsIncluded;
