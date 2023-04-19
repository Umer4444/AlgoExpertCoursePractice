Promise.myRace = function (promises) {
    return new Promise((raceResolve, raceReject) => {
        promises.forEach(p => {
            p.then((res) => {
                raceResolve(res)
            }, (err) => {
                raceReject(err)
            })
        })
    })
};

Promise.myAny = function (promises) {
    let len = promises.length
    return new Promise((raceResolve, raceReject) => {
        promises.forEach(p => {
            p.then((res) => {
                raceResolve(res)
            }, (err) => {
                len -= 1
                if (len === 0) {
                    raceReject('all promises rejected')
                }
            })
        })
    })
};

Promise.myAll = function (promises) {
    let len = promises.length
    const results = new Array(len).fill(null)
    return new Promise((raceResolve, raceReject) => {
        promises.forEach((p, index) => {
            p.then((res) => {
                results[index] = res
                len -= 1
                if (len === 0) {
                    raceResolve(results)
                }
            }, (err) => {
                raceReject(err)
            })
        })
    })
};

Promise.myAllSettled = function (promises) {
    let len = promises.length
    const results = new Array(len)
    return new Promise((raceResolve, raceReject) => {
        promises.forEach((p, index) => {
            results[index] = {}
            p.then((res) => {
                results[index].status = 'fulfilled'
                results[index].value = res
                len -= 1
                if (len === 0) {
                    raceResolve(results)
                }
            }, (err) => {
                results[index].status = 'rejected'
                results[index].error = err
                len -= 1
                if (len === 0) {
                    raceResolve(results)
                }
            })
        })
    })
};
