import React from 'react'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css';
import Logo from '../../assets/assets/logo.svg'

// !! All classnames used follow a specific css naming convention called BEM | (Block Elements Modifier) //

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={Logo} alt="logo" />
          <div className='gpt3__navbar_links_container'>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3</a></p>
            <p><a href="#possibility">Open Ai</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#Blog">Library</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;