import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Presentation from "./components/presentation"
import Slider from "./components/Slider"
import Video from "./components/Video"

import BombArea from "./components/BombArea"
import Blog from "./components/Blog"
import Footer from "./components/Footer"



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Presentation />
      <Slider />
      <Video />
    
     <BombArea />
     <Blog />
    <Footer />
    
    </>
  )
}

export default App
