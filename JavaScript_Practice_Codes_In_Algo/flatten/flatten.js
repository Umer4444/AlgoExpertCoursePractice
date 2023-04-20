function formatArray(array) {
    let newArray = [];

    for (let index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])) {
            newArray = [...newArray, ...fomartArray(array[index])];
        } else if (typeof array[index] === "object") {
            newArray.push(formatObj(array[index]));
        } else {
            newArray.push(array[index]);
        }
    }

    return newArray;
}

function formatObj(value) {
    let newObj = {};
    const keys = value ? Object.keys(value) : [];

    for (const key of keys) {
        if (
            !Array.isArray(value[key]) &&
            value[key] != null &&
            typeof value[key] === "object"
        ) {
            let returnIterator = formatObj(value[key]);

            newObj = { ...newObj, ...returnIterator };
        } else {
            if (Array.isArray(value[key])) {
                newObj[key] = fomartArray(value[key]);
            }
            else {
                newObj[key] = value[key];
            }
        }
    }

    return newObj;
}

function flatten(value) {
    if (Array.isArray(value)) return fomartArray(value);

    if (value != null && typeof value === "object") return formatObj(value);

    return value;
}
// Do not edit the line below.
exports.flatten = flatten;