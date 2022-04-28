import React from 'react';
import Home from './routes/home'
import {Route, Routes   } from 'react-router-dom'
import Numeros from './routes/numeros';
import './App.css';

function App(){
    return (
        <div className='App'>
        <Routes>
           <Route  path="/" element={<Home />}/>
           <Route  path="/numeros" element={<Numeros/>}/>
        </Routes>
        </div>
    );
}

export default App;