// src/components/Photos.tsx
import React from 'react';

const Photos: React.FC = () => {
    const carImages: string[] = [
        '/images/car.jpg',
    ];

    return (
        <section id="photos">
            <h2>Our Fleet</h2>
            <div className="photo-gallery">
                {carImages.map((image, index) => (
                    <img className="car-photo" key={index} src={image} alt={`Car ${index + 1}`} />
                ))}
            </div>
        </section>
    );
}

export default Photos;
