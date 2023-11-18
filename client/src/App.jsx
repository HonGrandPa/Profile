import { useState } from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {

  return (
    <div>
    <BrowserRouter>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </BrowserRouter>
      
    </div>
  )
}

export default App
