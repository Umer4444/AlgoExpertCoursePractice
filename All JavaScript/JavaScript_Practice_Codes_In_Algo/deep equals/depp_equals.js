function deepEquals(valueOne, valueTwo) {

    if (typeof valueOne !== typeof valueTwo) return false

    if (Number.isNaN(valueOne)) return Number.isNaN(valueTwo)

    if (Array.isArray(valueOne) && !Array.isArray(valueTwo)) return false
    if (Array.isArray(valueTwo) && !Array.isArray(valueOne)) return false

    if (valueOne === null) return valueTwo === null
    if (valueTwo === null) return valueOne === null

    if (Array.isArray(valueOne)) {
        if (valueOne.length !== valueTwo.length) return false
        return valueOne.every((item, index) => {
            return deepEquals(item, valueTwo[index])
        })
    }
    if (typeof valueOne === 'object') {
        let oneKeys = Object.keys(valueOne)
        let twoKeys = Object.keys(valueTwo)
        if (oneKeys.length !== twoKeys.length) return false

        return oneKeys.every((key) => {
            if (!valueTwo.hasOwnProperty(key)) return false
            return deepEquals(valueOne[key], valueTwo[key])
        })
    }
    return valueOne === valueTwo
}


// Do not edit the line below.
exports.deepEquals = deepEquals;
