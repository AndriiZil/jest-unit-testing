function func(a, b) {
    return a + b;
}

function getObj() {
    return {
        a: 'name',
        b: 28
    }
}

module.exports = {
    getObj,
    sum: func
};