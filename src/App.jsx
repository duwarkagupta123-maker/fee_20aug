import './App.css'
import Accordian from './component';
import React from 'react'
import Home from './component/Home'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/accordian">Accordian</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordian" element={<Accordian />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App