import { filterData } from "../resources/filterData";

export const getLevelData = () => {
    return __getFiltredDataByType(filterData.level);
};

export const getTimeData = () => {
    return __getFiltredDataByType(filterData.time);
};

export const getTypeData = () => {
    return __getFiltredDataByType(filterData.type);
};

export const getTrainerData = () => {
    return __getFiltredDataByType(filterData.trainer);
};

const __getFiltredDataByType = (filtredData) => {
    let filtredDataList = filtredData.data;
    let list = [];
    let i = 0;
    filtredDataList.filter(function(item) {
        list.push({ id: i, name: item.dataTitle, iconItemSrc: item.icon });
        ++i;
    });
    return {
        list: list,
        iconSrc: filtredData.icon
    };
};
