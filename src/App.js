import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import AnimalSounds from './components/AnimalSounds/AnimalSounds';

function Home() {
  return <h1>Welcome to the learning game! Choose an activity to start.</h1>;
}

function App() {
  return (
    <Router>
<div>
      
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
