import { Routes, Route } from 'react-router-dom'

// Style CSS
import './App.css'

// Navbar Component
import Navbar from './Components/Navbar'

// Pages Component

import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Products from './Pages/Products.jsx';
import Projects from './Pages/Projects.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';



function App() {
  return (
    <div className='App'>
      <Navbar />

      <div className='Contents'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      </div>
      
    </div>

  )

}

export default App
