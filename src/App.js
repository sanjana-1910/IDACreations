import './App.css';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Careers from './components/Careers';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
