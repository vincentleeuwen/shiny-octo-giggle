import React from 'react';
import {
  Panel,
  Image,
  Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Product = props => (
  <Panel>
    <Image src='http://via.placeholder.com/350x150' alt={props.title} responsive />
    <h4>{props.title}</h4>
    <p className='lead'>€ {props.price}</p>
    <Button
      bsStyle='primary'
      style={{
        backgroundColor: props.buttonColor,
        backgroundImage: 'none',
        borderColor: props.buttonColor,
      }}
    >
      Buy now!
    </Button>
  </Panel>
);

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  buttonColor: PropTypes.string.isRequired
};

export default Product;
