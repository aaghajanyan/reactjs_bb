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
        console.log("Val: ", value);
        this.setState({ arrayValue: value });
    }

    handleClick() {
        this.setState({
            arrayValue: []
        });
    }

    render() {
        return (
            <div className="main-container">
                <img className="mainIcon" src={this.props.filterData.iconSrc} />
                {this.state.arrayValue.length > 0 && (
                    <Badge id="badge-item" variant="primary">
                        {this.state.arrayValue.length}
                    </Badge>
                )}
                <Picky
                    className={this.props.className}
                    value={this.state.arrayValue}
                    options={this.props.filterData.list}
                    onChange={this.selectMultipleOption}
                    valueKey="id"
                    labelKey="name"
                    multiple={true}
                    render={({
                        isSelected,
                        item,
                        selectValue,
                        labelKey,
                        valueKey
                    }) => {
                        return (
                            <Fragment>
                                <li
                                    className={isSelected ? "selected" : ""}
                                    key={item[valueKey]}
                                    onClick={() => selectValue(item)}
                                    id="item"
                                >
                                    <img
                                        className="iconClass"
                                        src={ this.props.filterData.list[item[valueKey]].iconItemSrc }
                                    />
                                    <div className="title center">
                                        {item[labelKey]}
                                    </div>
                                    <input className="checkbox" type="checkbox" checked={isSelected}/>
                                </li>
                                {item.id === this.props.filterData.list.length - 1 && (
                                    <button onClick={this.handleClick} className="clear-all">
                                        {Messages.get('Filter.cleareAll')}
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
