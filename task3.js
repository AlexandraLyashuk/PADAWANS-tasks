function solveSudoku(matrix = []) {
    var nonPossible = {}; 
    var nonPossibleNumbers;
    var empty = 81;

    while (empty > 0) {
    empty = 0;
    for (var str = 0; str < matrix.length; str++) {
        for (var col = 0; col < matrix.length; col++) {
            if (matrix[str][col] === 0) {
                console.log(str, col);
            }  
        };
    }
    }
    return(matrix);
};

solveSudoku(matrix = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]);