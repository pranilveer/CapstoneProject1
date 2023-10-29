import './App.css';
import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import RegisterPage from './pages/RegisterPage';
import GenrePage from './pages/GenrePage';
import BrowsePage from './pages/BrowsePage';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<RegisterPage />}/>
      <Route path="/genre" element={<GenrePage />}/>
      <Route path="/browse" element={<BrowsePage />}/>
      </Routes>
    </div>
  );
}

export default App;
