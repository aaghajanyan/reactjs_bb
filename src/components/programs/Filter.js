import Picky from "react-picky";
import "react-picky/dist/picky.css";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";
import  Messages  from "../../constants/Messages";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayValue: []
        };
        this.selectMultipleOption = this.selectMultipleOption.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    selectMultipleOption(value) {
        this.setState({ arrayValue: value });
    }

    handleClick() {
        this.setState({
            arrayValue: []
        });
    }

    render() {
        return (
            <div className="filter-container">
                <img className="filter-container__icon" src={this.props.filterData.iconSrc} />
                {this.state.arrayValue.length > 0 && (
                    <Badge id="badge-item" variant="primary">
                        {this.state.arrayValue.length}
                    </Badge>
                )}
                <Picky
                    className={this.props.className} value={this.state.arrayValue} options={this.props.filterData.list}
                    onChange={this.selectMultipleOption} valueKey="id" labelKey="name" multiple={true}
                    render={({ isSelected, item, selectValue, labelKey, valueKey
                    }) => {
                        return (
                            <Fragment>
                                <li
                                    className={isSelected ? "filter-container__item selected" : "filter-container__item "}
                                    key={item[valueKey]}
                                    onClick={() => selectValue(item)}
                                >
                                    <img
                                        className="filter-container__item-icon"
                                        src={ this.props.filterData.list[item[valueKey]].iconItemSrc }
                                    />
                                    <div className="filter-container__item-title">
                                        {item[labelKey]}
                                    </div>
                                    <input className="filter-container__checkbox" type="checkbox" checked={isSelected}/>
                                </li>
                                {item.id === this.props.filterData.list.length - 1 && (
                                    <button onClick={this.handleClick} className="filter-container__clear-all-btn">
                                        {Messages.get("Filter.cleareAll")}
                                    </button>
                                )}
                            </Fragment>
                        );
                    }}
                />
            </div>
        );
    }
}

Filter.propTypes = {
    filterData: PropTypes.any,
    className: PropTypes.string
};

export { Filter };