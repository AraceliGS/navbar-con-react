import React from 'react';
// import PropTypes from 'prop-types';
import NavbarItems from './navbar-item';

const Navbar = ({arrayString}) => {
  return(
    <nav>
      {arrayString.map(el => <NavbarItems item={el} key={el}/>)}
    </nav>
  )
}

export default Navbar;