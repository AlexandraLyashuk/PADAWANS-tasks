/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    function abc(preferences = []){
        var count = 0;
        preferences.unshift(0);
        for (var i = 1; i < preferences.length; i++) {
        if (i === preferences[preferences[preferences[i]]], i!=preferences[preferences[i]], i!=preferences[i]){
        count = ++count;
        }
        }
        return((count) / 3);
    }
};