// src/components/PriceList.tsx
import React from 'react';

interface Car {
    name: string;
    price: string;
}

const PriceList: React.FC = () => {
    const cars: Car[] = [
        { name: 'Economy Car', price: '$40/day' },
        { name: 'SUV', price: '$60/day' },
        { name: 'Luxury Car', price: '$100/day' }
    ];

    return (
        <section id="price-list">
            <h2>Rental Prices</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>{car.name}: {car.price}</li>
                ))}
            </ul>
        </section>
    );
}

export default PriceList;
