import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Nav } from "react-bootstrap";

class Link extends React.Component {

  static propTypes = {
    modifiedChildren: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
    active: PropTypes.bool,
  };

  static defaultProps = {
    children: "",
    className: "",
    active: false,
  };

  render() {
    const { children, className, active, ...attrs } = this.props;
    let classes = classNames(
      className,
      { active },
    );
  
    const modifiedChildren = attrs.type === "true" ? <button className="nav-bar__btn"> {children} </button> : children;

    return (
      <Nav.Link
        className={classes}
        {...attrs}
      >
        {modifiedChildren}
      </Nav.Link>
    );
  }
}

export { Link };