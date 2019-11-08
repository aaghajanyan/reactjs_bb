import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

class FilterDropdown extends React.Component {

    static propTypes = {
        details: PropTypes.any,
        selectedItemCount: PropTypes.number
    };

    render() {
        const { selectedItemCount } = this.props;
        return(
     
            <div className="filter-dropdown-container">
                <img className="filter-dropdown-container__icon" alt="icon" src={this.props.details.icon} />
                {selectedItemCount > 0 && (
                    <Badge className="badge-item__tablet" variant="primary">
                        {selectedItemCount}
                    </Badge>
                )}
                <span className="filter-dropdown-container__title" > {this.props.details.title} </span>
                <img className="filter-dropdown-container__arrow-icon" alt="arrow" src={this.props.details.arrowIcon} />
            </div>
        );
      }
}

export { FilterDropdown };