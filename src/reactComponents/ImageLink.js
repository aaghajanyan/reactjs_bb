import React from "react";
import PropTypes from "prop-types";

const ImageLink = ({
  className, parentClassName, href, src, onClick, ...attrs
}) => {

  return (
    <a href={href} className={parentClassName}>
      <img
        className={className}
        src={src}
        onClick={onClick}
        {...attrs}
      />
    </a>
  );
};

ImageLink.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  parentClassName: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string
};

ImageLink.defaultProps = {
  onClick: () => {},
  className: "",
  parentClassName: "",
  href: "",
  src: ""
};

export { ImageLink };