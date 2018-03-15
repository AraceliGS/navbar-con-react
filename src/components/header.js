import React from 'react';
import Navbar from './navbar';

const arrayString = ['Inicio', 'Nosotros', 'Misión', 'Contáctanos'];

const Header = () => (
  <header>
    <p>Header</p>
    <Navbar arrayString ={arrayString}/>
  </header>
)

export default Header;