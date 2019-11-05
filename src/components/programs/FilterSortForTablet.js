import "react-picky/dist/picky.css";
import React from "react";
import PropTypes from "prop-types";

class FilterSortForTablet extends React.Component {
    render() {
        const filterSortList = this.props.filterSortNames.map((element, index) => {
            return <div className={element.className} key={index}> 
                        <span className="filterSort-container__title" >{element.name}</span>
                        <img className="filterSort-container__image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAMAAABV0m3JAAAAD1BMVEVHcEwvNTUxNDYvNTUxNDaUZ5plAAAABHRSTlMAYO8wBHtyNQAAADdJREFUeNpty0EKAEAIQtEy73/mmUXwEXIR9sAadUVaU7I7zNY/ofuiGOWs9whDMdQYioViKPYAjDEBAxPx53oAAAAASUVORK5CYII=" />
                    </div>
        });
        return (
            <div className="filterSort-container">
                {filterSortList}
            </div>
        );
    }
}

FilterSortForTablet.propTypes = {
    filterSortNames: PropTypes.any
};

export { FilterSortForTablet };