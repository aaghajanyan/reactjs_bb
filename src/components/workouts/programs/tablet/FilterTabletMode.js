import React from "react";
import Collapsible from "react-collapsible";
import { filterData } from "../../../../resources/filterData";
import { FilterDropdown } from "./FilterDropdown";
import PropTypes from "prop-types";

class FilterTabletMode extends React.Component {
    static propTypes = {
        isCloseClicked: PropTypes.any
    };

    static initialSelectedItems = {};

    constructor(props) {
        super(props);
        this.state = {
            isOpenedList: [],
            selectedItemsList: FilterTabletMode.initialSelectedItems
        }
        this.onOpening = this.onOpening.bind(this);
        this.onClosing = this.onClosing.bind(this);
        this.getInitialList = this.getInitialList.bind(this);  
        this.clickedCheckBox = this.clickedCheckBox.bind(this);
        this.getCheckedStatus = this.getCheckedStatus.bind(this);
        this.getSelectedItemsCount = this.getSelectedItemsCount.bind(this);
        this.clickResetFilter = this.clickResetFilter.bind(this);
    }

    getInitialList() {
        let initialOpenedList = [];
        {Object.keys(filterData).map(() => {
            initialOpenedList.push(false);
        })}
        return initialOpenedList;
    }

    onOpening(index) {        
        let initialOpenedList = this.getInitialList();
        initialOpenedList[index] = true;
        this.setState({
            isOpenedList: initialOpenedList
        });
    }

    onClosing() {
        let initialOpenedList = this.getInitialList();
        this.setState({
            isOpenedList: initialOpenedList
        });
    }
    
    clickedCheckBox(key, dataTitle) {
        if (FilterTabletMode.initialSelectedItems[key] == undefined) {
            FilterTabletMode.initialSelectedItems[key] = [];
        }
        if (FilterTabletMode.initialSelectedItems[key].includes(dataTitle)) {
            const index = FilterTabletMode.initialSelectedItems[key].indexOf(dataTitle);
            if (index !== -1) {
                FilterTabletMode.initialSelectedItems[key].splice(index, 1);
            }
        } else {
            FilterTabletMode.initialSelectedItems[key].push(dataTitle);
        }
        this.setState({
            selectedItemsList: FilterTabletMode.initialSelectedItems
        })
    }

    getCheckedStatus(key, dataTitle){
        const { selectedItemsList } = this.state;
        if (selectedItemsList[key] != undefined) {
            if (selectedItemsList[key].includes(dataTitle)) {
                return true;
            }
        }
        return false;
    }

    getSelectedItemsCount(key) {
        const { selectedItemsList } = this.state;
        let count = selectedItemsList[key] == undefined ? 0 : selectedItemsList[key].length;
        return count;
    }

    clickResetFilter() {
        FilterTabletMode.initialSelectedItems = {};
        this.setState({
            selectedItemsList: FilterTabletMode.initialSelectedItems
        });
    }

    render() {
        return(
                <div className="filter-container-collapse__tablet">
                    <span onClick={this.props.isCloseClicked} className="filter-container-collapse__tablet-close"> Close </span>
                    <span className="filter-container-collapse__tablet-title">Filter By</span>

                    <div className="filter-container-collapse__tablet-dropdown">
                        {Object.keys(filterData).map((key, index) => {
                            return <Collapsible contentInnerClassName="filter-container-collapse__tablet__inner-container" open={this.state.isOpenedList[index]} onOpening={() => this.onOpening(index)} onClosing={this.onClosing} key={key} transitionTime={1}
                                trigger={<FilterDropdown details={filterData[key]} selectedItemCount={this.getSelectedItemsCount(key)}/>} >
                                    {filterData[key].data.map((item, index) => {
                                        return <div onClick={() => this.clickedCheckBox(key, item.dataTitle)} className="filter-container-collapse__tablet-item" key={index}> 
                                            {item.icon && <img className="filter-container-collapse__tablet__item-icon" src={item.icon} />}
                                            <p className="filter-container-collapse__tablet__item-title">{item.dataTitle}</p>
                                            <input checked={this.getCheckedStatus(key, item.dataTitle)} className="filter-container-collapse__tablet__checkbox" type="checkbox" />
                                        </div>
                                    })}
                            </Collapsible>
                        })}
                    </div>
                    <span onClick={this.clickResetFilter} className="filter-container-collapse__tablet__reset-btn"> Reset Filter </span>


                </div>
        );
      }
}

export { FilterTabletMode };