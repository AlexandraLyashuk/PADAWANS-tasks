for (var vertBox = Math.floor(str / 3) * 3; vertBox < Math.floor(str / 3) * 3 + 3; vertBox++) {
    for (var horzBox = Math.floor(col / 3) * 3; horzBox < Math.floor(col / 3) * 3 + 3; horzBox++) {
        if (matrix[vertBox][horzBox]) {
            nonPossible[matrix[vertBox][horzBox]] = true;
        }
    }
}
nonPossibleNumbers = Object.keys(nonPossible);
if (nonPossibleNumbers.length === 8) {
    for (var i = 1; i < 10; i++) {
        if (nonPossibleNumbers.indexOf(i.toString()) < 0) {
            matrix[str][col] = i;
        }
    }
} else {
    empty = empty + 1;
}





nonPossible = {};
                for (var i = 0; i < 9; i++) {
                    if (matrix[str][i] > 0) {
                        nonPossible[matrix[str][i]] = true;
                    }
                    if (matrix[i][col] > 0) {
                        nonPossible[matrix[i][col]] = true;
                    }
                }