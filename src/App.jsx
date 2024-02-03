import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import './App.css'
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path= "/article/:id" element={<SingleProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;