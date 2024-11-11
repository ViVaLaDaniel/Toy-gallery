// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Gallery.css';

function Gallery() {
  const toys = [
    { id: 1, name: 'Teddy Bear', image: './src/assets/bear.jpg' },
    { id: 2, name: 'Toy Rebyt', image: './src/assets/bear.jpg' },
    { id: 2, name: 'Toy Rebyt', image: './src/assets/bear.jpg' },
    { id: 2, name: 'Toy Rebyt', image: './src/assets/bear.jpg' },
    { id: 2, name: 'Toy Rebyt', image: './src/assets/bear.jpg' },
    { id: 2, name: 'Toy Rebyt', image: './src/assets/bear.jpg' },
    { id: 2, name: 'Toy Rebyt', image: './src/assets/bear.jpg' },
    { id: 2, name: 'Toy Rebyt', image: './src/assets/bear.jpg' },
    // Добавь больше игрушек
  ];

  return (
    <div className="gallery">
      {toys.map((toy) => (
        <div key={toy.id} className="toy-card">
          <img src={toy.image} alt={toy.name} />
          <h3>{toy.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
