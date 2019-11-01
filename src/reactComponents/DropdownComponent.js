import React from "react";
import PropTypes from "prop-types";

const DropdownComponent = ({
    dropdownList    
}) => {
    const dropdownOptions = dropdownList.map(
        (element, index) => {
            return ( <option key={index}>{element}</option> );
        }
    );

    return (
        <select className="dropdown-container" >
            {dropdownOptions}
        </select>
    );
};

DropdownComponent.propTypes = {
    dropdownList: PropTypes.any
};

DropdownComponent.defaultProps = {
    dropdownList: []
};

export { DropdownComponent };