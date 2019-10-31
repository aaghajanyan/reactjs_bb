import React from "react";
import { Filter } from "./Filter";
import { getLevelData, getTypeData, getTimeData, getTrainerData } from "../../utils/programsDataHelper";
import { sortTypes } from "../../resources/sortTypes";
import { Sort } from "./Sort";
import  Messages  from "../../constants/Messages";
import { ProgramCardDeck } from "./ProgramCardDeck";
import { programData } from "../../resources/programsData";

class Programs extends React.Component {
    render() {
        return (
            <div className="programs-container">
                <h1 className="programs-container__program-title">{Messages.get("Programs.title")}</h1>
                <div className="programs-container__filter-container">
                    <Filter className="programs-container__level" filterData={getLevelData()}/>
                    <Filter className="programs-container__time" filterData={getTimeData()} />
                    <Filter className="programs-container__type" filterData={getTypeData()} />
                    <Filter className="programs-container__trainer" filterData={getTrainerData()} />
                </div>
                <div className="programs-container__sort-container">
                    <Sort slassName="programs-container__sort-list" sortTypes={sortTypes} />
                </div>
                <div className="programs-container__programs-card">
                    <ProgramCardDeck programData={programData.data.allItems}/>
                </div>
            </div>
        );
    }
}

export { Programs };