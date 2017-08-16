import React from 'react';
import { BlockPicker } from 'react-color';
import {
  FormGroup,
  ControlLabel,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ColorForm = props => (
  <FormGroup style={{ marginRight: '10px', marginBottom: '15px' }}>
    <ControlLabel>{props.label}</ControlLabel>
    <br />
    <br />
    <BlockPicker
      color={props.color}
      onChangeComplete={props.updateColor}
    />
  </FormGroup>
);

ColorForm.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  updateColor: PropTypes.func.isRequired,
};

export default ColorForm;
