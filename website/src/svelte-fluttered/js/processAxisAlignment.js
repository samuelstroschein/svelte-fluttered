const officialAxisAlignments = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
];

const shortAxisAlignments = [
    "start",
    "end",
    "center",
    "between",
    "around",
    "evenly",
];

const processAxisAlignment = (axisAlignment) => {
    if (officialAxisAlignments.includes(axisAlignment)) return axisAlignment;
    var indexPossibleShorthand = shortAxisAlignments.indexOf(axisAlignment);
    if (indexPossibleShorthand != -1)
        return officialAxisAlignments[indexPossibleShorthand];
    else return "";
};

export default processAxisAlignment
