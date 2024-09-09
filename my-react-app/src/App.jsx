import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

// Pages
import Home from './Pages/Home/Home';
import Post from './Pages/Post/Post';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts/:id' element={<Post />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
