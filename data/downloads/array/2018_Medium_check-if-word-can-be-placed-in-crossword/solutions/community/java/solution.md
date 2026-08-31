# Java Easy To understand with Comments.

**Author:** neerazz90
**Votes:** 15
**Link:** [https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1486448/](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1486448/)

---

Intution, at every element on teh board check if word can be placed in anoy of the 4 directions.
1. Base condition, the start char should not be '#'
2. When placing the word in right direction horizontally, the letter on the left of the start should be valid.
	* Valid means, it should not be any empty cells ' ' or other lowercase letters. It should either be out of range else it should be '#'
3. Do a DFS in a given direction, and keep matching the charectors in board with word.

Time: O(m*n*l), m*n is the array rows, and cols. And L being the length of the word.

```
    public static boolean placeWordInCrossword(char[][] board, String word) {
        int rows = board.length, cols = rows > 0 ? board[0].length : 0;
        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                if (isPossible(board, word, row, col, rows, cols)) {
//                    System.out.println("row = " + row + " col = " + col);
                    return true;
                }
            }
        }
        return false;
    }

    static boolean isPossible(char[][] grid, String word, int row, int col, int rows, int cols) {
//        The start character should not '#'
        if (grid[row][col] == '#') return false;
//        Check if word can be placed in left direction. For that you have to check if the right element of starting point should be either out of index, or should be '#'
        if (isValid(grid, row, col + 1, rows, cols) && isPossible(grid, word, row, col, rows, cols, 0, -1)) return true;
//        Check if word can be placed in right direction. For that you have to check if the right element of starting point should be either out of index, or should be '#'
        if (isValid(grid, row, col - 1, rows, cols) && isPossible(grid, word, row, col, rows, cols, 0, 1)) return true;
//        Check if word can be placed in top direction. For that you have to check if the bottom element of starting point should be either out of index, or should be '#'
        if (isValid(grid, row + 1, col, rows, cols) && isPossible(grid, word, row, col, rows, cols, -1, 0)) return true;
//        Check if word can be placed in bottom direction. For that you have to check if the top element of starting point should be either out of index, or should be '#'
        return isValid(grid, row - 1, col, rows, cols) && isPossible(grid, word, row, col, rows, cols, 1, 0);
    }

    static boolean isPossible(char[][] board, String word, int row, int col, int rows, int cols, int d1, int d2) {
        int i = 0, len = word.length();
        while (i < len && inRange(row, col, rows, cols) && (board[row][col] == ' ' || board[row][col] == word.charAt(i))) {
            row += d1;
            col += d2;
            i++;
        }
//        If all characters are not travelled in the word
        if (i < len) return false;
//        The ending char should be valid, either out of index or '#'
        return isValid(board, row, col, rows, cols);
    }

    static boolean inRange(int row, int col, int rows, int cols) {
        return row >= 0 && row < rows && col >= 0 && col < cols;
    }

    static boolean isValid(char[][] board, int row, int col, int rows, int cols) {
//        Is to check the left and right element is valid, when placing horizontally. And vise-versa
        if (inRange(row, col, rows, cols)) return board[row][col] == '#';
        return true;
    }
```