import React from 'react';
import Navbar from './navbar';

const arrayString = ['Inicio', 'Nosotros', 'Misión'];

const Header = () => (
  <header>
    <p>Header</p>
    <Navbar arrayString ={arrayString}/>
  </header>
)

export default Header;