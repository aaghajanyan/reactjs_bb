import "react-picky/dist/picky.css";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import  Messages  from "../../constants/Messages";

class Sort extends React.Component {
    render() {
        const sortTypeList = this.props.sortTypes.map((element, index) => {
            let activeClass = (index === 0) ? "sort-list__item active" : "sort-list__item";
            return <li className={activeClass} key={index}><a href="#" className="sort-list__name">{element}</a></li>
        });
        return (
            <Fragment>
                <span className="sort-by"> {Messages.get("Programs.sortBy")} </span>
                <ul className="sort-list__items"> {sortTypeList} </ul>
            </Fragment>
        );
    }
}

Sort.propTypes = {
    sortTypes: PropTypes.any
};

export { Sort };