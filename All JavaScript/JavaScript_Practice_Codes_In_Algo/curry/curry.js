function curry(callback) {
    return function (...args) {
        if (!args.length) {
            return callback()
        }
        return curry(callback.bind(this, ...args))
    }
}

// Do not edit the line below.
exports.curry = curry;
