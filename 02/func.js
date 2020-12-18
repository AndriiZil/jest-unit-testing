module.exports = {
    fetchData: () => {
        return new Promise(resolve => {
            resolve('peanut butter')
        })
    },
    fetchDataWithError: () => {
        return new Promise((resolve, reject) => {
            reject('error')
        });
    }
}