import React from 'react'
import { Features, Blog, Possibility, Footer, whatGPT3, Header} from './container';
import { CTA, Brand, Navbar } from './components';
import './App.css';


function App() {
  return (
    <>
      <div>
        <div className='App'>
          <div className='Gradient__bg'>
            <Navbar />
            <Header />
          </div>
          <Brand />
          <whatGPT3 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
