import "react-picky/dist/picky.css";
import React from "react";
import PropTypes from "prop-types";
import  Messages  from "../../../../constants/Messages";

class SortTabletMode extends React.Component {
    static propTypes = {
        sortTypes: PropTypes.any,
        isCloseClicked: PropTypes.func
    };

    render() {
        const sortTypeList = this.props.sortTypes.map((element, index) => {
            let activeClass = (index === 0) ? "sort-list__item__tablet active__tablet" : "sort-list__item__tablet";
            return <li className={activeClass} key={index}><a href="#" className="sort-list__name__tablet">{element}</a></li>
        });
        return (
            <div className="sort-container-collapse__tablet">
                <span onClick={this.props.isCloseClicked} className="sort-container-collapse__close"> Close </span>
                <span className="sort-by__tablet"> {Messages.get("SortTabletMode.sortBy")} </span>
                <ul className="sort-list__items-tablet"> {sortTypeList} </ul>
            </div>
        );
    }
}

export { SortTabletMode };