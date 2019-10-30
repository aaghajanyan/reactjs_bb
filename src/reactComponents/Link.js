import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Nav } from 'react-bootstrap';

const Link = ({
  children, onClick, className, disabled, active, ...attrs
}) => {
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const classes = classNames(
    className,
    { active },
  );

  const modifiedChildren = attrs.type === "true" ? <button className="nav-bar-btn"> {children} </button> : children;

  return (
    <Nav.Link
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {modifiedChildren}
    </Nav.Link>
  );
};

Link.propTypes = {
  modifiedChildren: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Link.defaultProps = {
  children: 'Item',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
};

export { Link };