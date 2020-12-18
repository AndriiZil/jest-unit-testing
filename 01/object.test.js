const { getObj } = require('./func');

test('test get object', () => {
    let expected = { a: 'name', b: 28 };

    expect(getObj()).toEqual(expected);
});

test('check every value of obj', () => {
    for (let key in getObj()) {
        expect(key).not.toBe(0);
    }
});
