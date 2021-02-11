// const officialMainAxisSizes = ["min", "max"];

const processColumnMainAxisSize = (mainAxisSize) => {
    if (mainAxisSize == "min") {
        return " ";
    }
    else if (mainAxisSize == "max") {
        return "100%";
    }
    else {
        throw "The main axis size can either be 'min' or 'max'";
    }
};

// TODO
// align-self override. 
const processRowMainAxisSize = (mainAxisSize) => {
    if (mainAxisSize == "min") {
        return " ";
    }
    else if (mainAxisSize == "max") {
        return "100%";
    }
    else {
        throw "The main axis size can either be 'min' or 'max'";
    }
};

export default { processColumnMainAxisSize, processRowMainAxisSize }
