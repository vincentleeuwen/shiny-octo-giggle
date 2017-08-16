import React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import Product from './Product';
import PropTypes from 'prop-types';

const Products = props => (
  <Row>
    <Col xs={12} sm={6} md={4}>
      <Product
        title={'Awesome product #1'}
        price={9.99}
        buttonColor={props.buttonColor}
      />
    </Col>
    <Col xs={12} sm={6} md={4}>
      <Product
        title={'Awesome product #2'}
        price={12.99}
        buttonColor={props.buttonColor}
      />
    </Col>
    <Col xs={12} sm={6} md={4}>
      <Product
        title={'Awesome product #3'}
        price={6.95}
        buttonColor={props.buttonColor}
      />
    </Col>
  </Row>
);

Products.propTypes = {
  buttonColor: PropTypes.string.isRequired,
};

export default Products;
