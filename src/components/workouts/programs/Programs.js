import React from "react";
import  Messages  from "../../../constants/Messages";
import { FilterSortTabletMode } from "./tablet/FilterSortTabletMode"
import { filterSortNames } from "../../../resources/filterSort";
import { FilterSortDesktopMode } from "./desktop/FilterSortDesktopMode";

class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    render() {
        const show = this.state.width < 640 ? false : true;
        return (
            <div className="programs-container">
                <h1 className="programs-container__program-title">{Messages.get("Programs.title")}</h1>
                { show ? <FilterSortDesktopMode /> : <FilterSortTabletMode filterSortNames={filterSortNames}/> }
            </div>
        );
    }
}

export { Programs };