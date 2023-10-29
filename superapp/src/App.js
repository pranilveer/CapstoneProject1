import './App.css';
import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import RegisterPage from './pages/RegisterPage';
import GenrePage from './pages/GenrePage';
import BrowsePage from './pages/BrowsePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<RegisterPage />}/>
      <Route path="/genre" element={<GenrePage />}/>
      <Route path="/browse" element={<BrowsePage />}/>
      <Route path="/movies" element={<MoviesPage />}/>
      </Routes>
    </div>
  );
}

export default App;
