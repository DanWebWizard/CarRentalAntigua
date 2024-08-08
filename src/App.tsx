// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Photos from './components/Photos';
import PriceList from './components/PriceList';
import WhatsIncluded from './components/WhatsIncluded';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Photos />
            <PriceList />
            <WhatsIncluded />
        </div>
    );
}

export default App;
