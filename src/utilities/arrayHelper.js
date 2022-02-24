export const cloneDeepArray = (array) => {
    return array.map(function (arr) {
        return arr.slice();
    });
}