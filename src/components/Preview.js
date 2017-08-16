import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Products from './Products';
import Banner from './Banner';
import Topnavbar from './Topnavbar';

const Preview = props => (
  <div>
    <Topnavbar brand={props.brand} navbarColor={props.navbarColor} />
    <Grid>
      <Row>
        <Col xs={12}>
          <Banner
            usp={props.usp}
            tagline={props.tagline}
            bannerColor={props.bannerColor}
            bannerTextColor={props.bannerTextColor}
            buttonColor={props.buttonColor}
          />
          <Products buttonColor={props.buttonColor} />
        </Col>
      </Row>
    </Grid>
  </div>
);

Preview.propTypes = {
  navbarColor: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  usp: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  bannerColor: PropTypes.string.isRequired,
  bannerTextColor: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
};

export default Preview;
