import './App.css';
import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import RegisterPage from './pages/RegisterPage';
import GenrePage from './pages/GenrePage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/genre" element={<GenrePage />}/>
      </Routes>
    </div>
  );
}

export default App;
