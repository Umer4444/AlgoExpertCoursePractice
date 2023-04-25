class EventTarget {
    constructor() {
        this.listeners = {};
    }

    addEventListener(name, callback) {
        this.listeners[name] = this.listeners[name] || new Set();
        this.listeners[name].add(callback);
    }

    removeEventListener(name, callback) {
        this.listeners[name]?.delete(callback);
    }

    dispatchEvent(name) {
        this.listeners[name]?.forEach((callback) => callback());
    }
}

// Do not edit the line below.
exports.EventTarget = EventTarget;
