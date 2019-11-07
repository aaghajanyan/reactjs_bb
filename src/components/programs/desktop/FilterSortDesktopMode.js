import "react-picky/dist/picky.css";
import React from "react";
import { Filter } from "../Filter";
import { getLevelData, getTypeData, getTimeData, getTrainerData } from "../../../utils/programsDataHelper";
import { sortTypes } from "../../../resources/sortTypes";
import { Sort } from "../Sort";

class FilterSortDesktopMode extends React.Component {
    render() {
        return (
            <div>
                <div className="programs-container__filter-container">
                    <Filter className="programs-container__level" filterData={getLevelData()}/>
                    <Filter className="programs-container__time" filterData={getTimeData()} />
                    <Filter className="programs-container__type" filterData={getTypeData()} />
                    <Filter className="programs-container__trainer" filterData={getTrainerData()} />
                </div>
                <div className="programs-container__sort-container">
                    <Sort slassName="programs-container__sort-list" sortTypes={sortTypes} />
                </div>
            </div>
        );
    }
}

export { FilterSortDesktopMode };