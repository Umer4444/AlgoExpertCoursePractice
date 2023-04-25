function throttle(callback, delay) {
    let allowedToExecute = true
    let pendingArgs = null

    const throttledFunction = function (...args) {
        if (allowedToExecute === false) {
            pendingArgs = args
            return
        }
        allowedToExecute = false
        callback.apply(this, args)

        const executeThenWait = () => {
            if (pendingArgs == null) {
                allowedToExecute = true
                return
            }
            callback.apply(this, pendingArgs)
            pendingArgs = null
            setTimeout(executeThenWait, delay)
        }
        setTimeout(executeThenWait, delay)
    }
    throttledFunction.cancel = () => pendingArgs = null
    return throttledFunction
}

// Do not edit the line below.
exports.throttle = throttle;
