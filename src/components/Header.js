import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => (
  <header className="header">
    <h1>{title}</h1>
    <Button color="black" text={showAdd ? 'close' : 'Add'} onClick={onAdd} />
  </header>
);

Header.defaultProps = {
  title: 'Trackre',
  onAdd: PropTypes.func,
  showAdd: PropTypes.func,
};

Header.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
  showAdd: PropTypes.func,
};

export default Header;
