import React from 'react';
import PropTypes from 'prop-types';

const BaseAlert = ({ text }) => (
  <div className='alert alert-primary ' role='alert'>
    <h5>{text}</h5>
  </div>
);
BaseAlert.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BaseAlert;
