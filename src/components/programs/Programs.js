import React from "react";
import  Messages  from "../../constants/Messages";
import { ProgramCardDeck } from "./ProgramCardDeck";
import { programData } from "../../resources/programsData";

import { FilterSortTabletMode } from "./FilterSortTabletMode"
import { filterSortNames } from "../../resources/filterSort";
import { FilterSortDesktopMode } from "./FilterSortDesktopMode";

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
                <div className="programs-container__programs-card">
                    <ProgramCardDeck programData={programData.data.allItems}/>
                </div>
            </div>
        );
    }
}

export { Programs };