import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About/About';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* <div className="App-header">
        a
      </div> */}
      <div className="body-app">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;