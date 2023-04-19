function promisify(callback) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function handleErrorAndValue(err, value) {
                if (err !== null) reject(err)
                resolve(value);
            }
            try {
                callback.apply(this, [...args, handleErrorAndValue])
            }
            catch (err) {
                reject(err);
            }
        })
    }
}

// Do not edit the line below.
exports.promisify = promisify;
