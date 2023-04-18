Array.prototype.myMap = function (callback) {
    const output = [];
    for ([index, element] of this.entries()) {
        output.push(callback(element, index, this));
    }
    return output;
};