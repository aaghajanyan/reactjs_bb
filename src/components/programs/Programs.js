import React from "react";
import { Filter } from "./Filter";
import { getLevelData, getTypeData, getTimeData, getTrainerData } from "../../utils/programsDataHelper";
import { sortTypes } from "../../resources/sortTypes";
import { Sort } from "./Sort";
import  Messages  from "../../constants/Messages";

class Programs extends React.Component {
    render() {
        return (
            <div className="programs-container">
                <h1 className="program-title">{Messages.get("Programs.title")}</h1>
                <div className="filterContainer">
                    <Filter className="filterItem level" filterData={getLevelData()}/>
                    <Filter className="filterItem time" filterData={getTimeData()} />
                    <Filter className="filterItem type" filterData={getTypeData()} />
                    <Filter className="filterItem trainer" filterData={getTrainerData()} />
                </div>
                <div className="sortContainer">
                    <Sort slassName="sort-list" sortTypes={sortTypes} />
                </div>
            </div>
        );
    }
}

export { Programs };