import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
} from 'react-bootstrap';

const Topnavbar = props => (
  <Navbar
    inverse
    staticTop
    style={{ background: props.navbarColor, borderColor: props.navbarColor }}
  >
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/'>{props.brand}</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
);

Topnavbar.propTypes = {
  brand: PropTypes.string.isRequired,
  navbarColor: PropTypes.string.isRequired,
};

export default Topnavbar;
