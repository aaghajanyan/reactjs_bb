import "react-picky/dist/picky.css";
import React from "react";
import PropTypes from "prop-types";
import { SortTabletMode } from "./SortTabletMode";
import { sortTypes } from "../../../resources/sortTypes";
import { FilterTabletMode } from "./FilterTabletMode";

class FilterSortTabletMode extends React.Component {

    static propTypes = {
        filterSortNames: PropTypes.any
    };

    constructor(props) {
        super(props);
        this.state = {
            hideSort: false,
            hideFilter: false
        };
        this.openMenu = this.openMenu.bind(this);
        this.isSortCloseClicked = this.isSortCloseClicked.bind(this);
        this.isFilterCloseClicked = this.isFilterCloseClicked.bind(this);
    }

    openMenu(event) {
        switch(event.target.dataset.type) {
            case "sort":
                this.setState({
                    hideSort: !this.state.hideSort
                });
                break;
            case "filter":
                this.setState({
                    hideFilter: !this.state.hideFilter
                });
                break;
        }
    }

    isSortCloseClicked() {
        this.setState({
            hideSort: !this.state.hideSort
        });
    }

    isFilterCloseClicked() {
        this.setState({
            hideFilter: !this.state.hideFilter
        });
    }

    render() {
        const filterSortList = this.props.filterSortNames.map((element, index) => {
            return <div onClick={this.openMenu} className={element.className} key={index} data-type={element.dataType}> 
                        <span className="filterSort-container__title" data-type={element.dataType}> {element.name} </span>
                        <img className="filterSort-container__image" data-type={element.dataType} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAMAAABV0m3JAAAAD1BMVEVHcEwvNTUxNDYvNTUxNDaUZ5plAAAABHRSTlMAYO8wBHtyNQAAADdJREFUeNpty0EKAEAIQtEy73/mmUXwEXIR9sAadUVaU7I7zNY/ofuiGOWs9whDMdQYioViKPYAjDEBAxPx53oAAAAASUVORK5CYII=" />
                    </div>
        });

        return (
            <div className="filterSort-container">
                {filterSortList}
                { this.state.hideSort && <SortTabletMode sortTypes={sortTypes} isCloseClicked={this.isSortCloseClicked}/> }
                { this.state.hideFilter && <FilterTabletMode isCloseClicked={this.isFilterCloseClicked}/> }
            </div>
        );
    }
}

export { FilterSortTabletMode };