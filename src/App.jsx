import React, { useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {

  




  return (
    <div>
      <main className="relative min-h-screen w-screen overflow-x-hidden ">
        <Navbar/>

        <Hero/>
        <About/>
        

      </main>
    </div>
  )
}

export default App
