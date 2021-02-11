// const officialMainAxisSizes = ["min", "max"];


// TODO
// align-self override. 

const processMainAxisSize = (mainAxisSize) => {
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

export default processMainAxisSize
