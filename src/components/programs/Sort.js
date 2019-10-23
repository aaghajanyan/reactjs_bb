import 'react-picky/dist/picky.css';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import  Messages  from "../../constants/Messages";

class Sort extends React.Component {

    render() {
        const sortTypeList = this.props.sortTypes.map((element, index) => {
            let activeClass = (index === 0) ? "li-item active" : "li-item";
            return <li className={activeClass} key={index}><a href="#">{element}</a></li>
        });
        return (
            <Fragment>
                <span className="sort-by"> {Messages.get('Programs.sortBy')} </span>
                <ul> {sortTypeList} </ul>
            </Fragment>
        );
    }
}

Sort.propTypes = {
    sortTypes: PropTypes.any
};

export { Sort };
