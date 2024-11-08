import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AnimalSounds from './components/AnimalSounds/AnimalSounds';

function Home() {
  return <p>Welcome to the learning game! Choose an activity to start.</p>;
}

function App() {
  return (
    <Router>
<div>
      <h1>Welcome to My Learning Game!</h1>
      <h3> Click on the activity </h3>
      <nav>
          <Link to="/">Home</Link> | <Link to="/animal-sounds">Animal Sounds</Link>
      </nav>



      <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Animal Sounds Route */}
          <Route path="/animal-sounds" element={<AnimalSounds />} />
      </Routes>
    </div>
    </Router>
    
    
  );
}

export default App;
