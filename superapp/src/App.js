import './App.css';
import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/register" element={<RegisterPage />}/>
      </Routes>
    </div>
  );
}

export default App;
