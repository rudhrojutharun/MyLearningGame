import React from 'react';
import './AnimalSounds.css';

// Placeholder data for animals (add actual image and sound paths)
const animals = [
  { name: 'Dog', img: 'images/dog.jpg', sound: 'sounds/dog-bark.mp3' },
  { name: 'Cat', img: 'images/cat.jpg', sound: 'sounds/cat-meow.mp3' },
  { name: 'Cow', img: 'images/cow.jpg', sound: 'sounds/cow-moo.mp3' },
];

function AnimalSounds() {
  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play().catch(error => console.log('Audio play error:', error));
  };

  return (
    <div className="animal-sounds">
      <h2>Animal Sounds</h2>
      <p>Click on an animal to hear its sound!</p>
      <div className="animal-grid">
        {animals.map((animal) => (
          <div
            key={animal.name}
            className="animal-card"
            onClick={() => playSound(animal.sound)}
          >
            <img
              src={animal.img}
              alt={animal.name}
              className="animal-image"
              onError={(e) => e.target.src = 'images/placeholder.jpg'}
            />
            <p className="animal-name">{animal.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimalSounds;
