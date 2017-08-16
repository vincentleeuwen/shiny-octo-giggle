import React from 'react';
import {
  Panel,
  FormControl,
  FormGroup,
  Button,
  ControlLabel,
  Form,
  Row,
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import ColorForm from './ColorForm';
import Topnavbar from './Topnavbar';
import Banner from './Banner';

const EditWebshop = props => (
  <Panel header={`Webshop: #${props.shopId}`}>
    <Row>
      <Col xs={12} md={7}>
        <Form>
          <FormGroup
            controlId='formBasicText'
          >
            <ControlLabel>Webshop title</ControlLabel>
            <FormControl
              name='brand'
              type='text'
              value={props.brand}
              onChange={props.handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup
            controlId='formBasicText'
          >
            <ControlLabel>Unique selling point</ControlLabel>
            <FormControl
              name='usp'
              type='text'
              value={props.usp}
              onChange={props.handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup
            controlId='formBasicText'
          >
            <ControlLabel>Tagline</ControlLabel>
            <FormControl
              name='tagline'
              type='text'
              value={props.tagline}
              onChange={props.handleInputChange}
              required
            />
          </FormGroup>
        </Form>
        <Form inline>
          <ColorForm
            label='Navigation bar color'
            color={props.navbarColor}
            updateColor={props.updateNavbarColor}
          />
          <ColorForm
            label='Banner color'
            color={props.bannerColor}
            updateColor={props.updateBannerColor}
          />
          <ColorForm
            label='Banner text color'
            color={props.bannerTextColor}
            updateColor={props.updateBannerTextColor}
          />
          <ColorForm
            label='Button color'
            color={props.buttonColor}
            updateColor={props.updateButtonColor}
          />
        </Form>
      </Col>
      <Col xs={12} md={5}>
        <Panel className='preview'>
          <Topnavbar brand={props.brand} navbarColor={props.navbarColor} />
          <Banner
            usp={props.usp}
            tagline={props.tagline}
            bannerColor={props.bannerColor}
            bannerTextColor={props.bannerTextColor}
            buttonColor={props.buttonColor}
          />
          <p>
            <Button
              bsStyle='info'
              onClick={props.loadPreview}
              block
            >
              Preview in full window
            </Button>
          </p>
        </Panel>
      </Col>
    </Row>
  </Panel>
);

EditWebshop.propTypes = {
  shopId: PropTypes.number.isRequired,
  navbarColor: PropTypes.string.isRequired,
  updateNavbarColor: PropTypes.func.isRequired,
  bannerColor: PropTypes.string.isRequired,
  bannerTextColor: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  updateButtonColor: PropTypes.func.isRequired,
  brand: PropTypes.string.isRequired,
  usp: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  updateBannerColor: PropTypes.func.isRequired,
  updateBannerTextColor: PropTypes.func.isRequired,
  loadPreview: PropTypes.func.isRequired,
};

export default EditWebshop;
