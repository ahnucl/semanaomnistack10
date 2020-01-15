module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(element => element.trim()); // DRY - From DevController to good practices
}