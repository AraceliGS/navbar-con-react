import React from 'react';
import PropTypes from 'prop-types';
import NavbarItems from './navbar-item';

const Navbar = ({arrayString}) => {
  return(
    <nav>
      {arrayString.map(el => <NavbarItems item={el} key={el}/>)}
    </nav>
  )
}

Navbar.propTypes = {
  arrayString: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Navbar;