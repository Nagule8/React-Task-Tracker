import React, {} from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => <button type="button" style={{ backgroundColor: color }} className="btn" onClick={onClick}>{text}</button>;

Button.defaultProps = {
  text: PropTypes.string,
  color: 'steelblue',
  onClick: PropTypes.func,
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
