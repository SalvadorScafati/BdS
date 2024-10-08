import React from 'react';
import Home from './routes/home'
import {Route, Routes   } from 'react-router-dom'
import Numeros from './routes/numeros';
import Podcast from './routes/podcast';
import Login from './routes/login';
import './App.css';
import Adminmain from './routes/adminmain';
import Contacto from './routes/contacto';
import About from './routes/about';

function App(){
    return (
        <div className='App'>
        <Routes>
           <Route  path="/" element={<Home />}/>
           <Route  path="/numeros" element={<Numeros/>}/>
           <Route  path="/podcast" element={<Podcast/>}/>
           <Route  path="/entradasecreta" element={<Login/>}/>
           <Route  path='/adminmain' element={<Adminmain/>}/>
           <Route  path='/contacto' element={<Contacto/>}/>
           <Route  path='/acercade' element={<About/>}/>
        </Routes>
        </div>
    );
}

export default App;