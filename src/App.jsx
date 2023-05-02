import React, {useEffect, useRef, useState} from 'react'
import './App.scss';
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'


export default () => {
  const [burger, setBurger] = useState('burger unclicked')
  const [menu, setMenu] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState('menu hidden')

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurger('burger clicked')
      setMenu('menu visible')
    }
    else {
      setBurger('burger unclicked')
      setMenu('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  const sideNavRef = useRef(null);
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  const handleClickOutside = (event) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setBurger('burger unclicked')
      setMenu('menu hidden')
    }
  }
  
  
  return <div>
    <nav className='navbar' ref={sideNavRef}> 
      <div className={menu}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <NavLink to='/resume'>Resume</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
      <div className="hamburger" onClick={updateMenu}>
        <div className={burger} />
        <div className={burger} />
        <div className={burger} />
      </div>
    </nav>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<p>Page not found</p>} />
    </Routes>
  </div>
}