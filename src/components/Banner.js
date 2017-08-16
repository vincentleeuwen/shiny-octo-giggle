import React from 'react';
import {
  Jumbotron,
  Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Banner = props => (
  <Jumbotron style={{ backgroundColor: props.bannerColor }} >
    <h1 style={{ color: props.bannerTextColor }}>{props.usp}</h1>
    <p style={{ color: props.bannerTextColor }}>
      {props.tagline}
    </p>
    <p>
      <Button
        bsStyle='primary'
        style={{
          backgroundColor: props.buttonColor,
          backgroundImage: 'none',
          borderColor: props.buttonColor,
        }}
      >
      Learn more
      </Button>
    </p>
  </Jumbotron>
);

Banner.propTypes = {
  usp: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  bannerColor: PropTypes.string.isRequired,
  bannerTextColor: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
};

export default Banner;
