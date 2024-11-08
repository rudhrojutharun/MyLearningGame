import React from 'react';
import './AnimalSounds.css';


// Placeholder data for animals (you can add actual images and sound files here)
const animals = [
  { name: 'Dog', img: 'dog.jpg', sound: 'dog-bark.mp3' },
  { name: 'Cat', img: 'cat.jpg', sound: 'cat-meow.mp3' },
  { name: 'Cow', img: 'cow.jpg', sound: 'cow-moo.mp3' },
];

function AnimalSounds() {
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div>
      <h2>Animal Sounds</h2>
      <p>Click on an animal to hear its sound!</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        {animals.map((animal) => (
          <div key={animal.name} onClick={() => playSound(animal.sound)}>
            <img
              src={animal.img}
              alt={animal.name}
              width="100"
              height="100"
            />
            <p>{animal.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimalSounds;
