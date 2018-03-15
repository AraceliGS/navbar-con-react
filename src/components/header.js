import React from 'react';
import Navbar from './navbar';

const arrayString = ['inicio', 'nosotros', 'mision'];

const Header = () => (
  <header>
    <p>Header</p>
    <Navbar arrayString ={arrayString}/>
  </header>
)

export default Header;