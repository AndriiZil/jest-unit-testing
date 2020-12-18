const { fetchData, fetchDataWithError } = require('./func');

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchDataWithError().catch(e => expect(e).toMatch('error'));
});

test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
    return expect(fetchDataWithError()).rejects.toMatch('error');
});

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchDataWithError();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    await expect(fetchDataWithError()).rejects.toBe('error');
});
