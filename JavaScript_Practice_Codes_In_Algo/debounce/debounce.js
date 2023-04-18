function debounce(callback, delay, immediate = false) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) callback.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, delay);
        if (callNow) callback.apply(context, args);
    };
}

// Do not edit the line below.
exports.debounce = debounce;
