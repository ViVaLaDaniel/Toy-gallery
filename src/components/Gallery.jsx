import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedToy, setSelectedToy] = useState(null);
  const toys = [
    { id: 1, name: 'Teddy Bear', image: './src/assets/bear.jpg', description: 'This is a teddy aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa   ADADDDDDDDDDDDDDDDDDD adaddddddddddddddddddddd   daaaaaaaaaaaaaaaaa ddddddddddddddd daaaaaaaaaaaaaaaa addddddddddddddddd' },
    { id: 2, name: 'Toy Rabbit', image: './src/assets/bear.jpg', description: 'This is a toy rabbit' },
    // Add more toys here
  ];

  const handleToyClick = (toy) => {
    setSelectedToy(toy);
  };

  const handleBackgroundClick = () => {
    setSelectedToy(null);
  };

  return (
    <div className="gallery">
      {toys.map((toy) => (
        <div key={toy.id} className="toy-card" onClick={() => handleToyClick(toy)}>
          <img src={toy.image} alt={toy.name} />
          <h3>{toy.name}</h3>
        </div>
      ))}
      {selectedToy && (
        <div className="toy-modal" onClick={handleBackgroundClick}>
          <div className="toy-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedToy.image} alt={selectedToy.name} />
            <div className="toy-modal-description">
              <h3>{selectedToy.name}</h3>
              <p>{selectedToy.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
