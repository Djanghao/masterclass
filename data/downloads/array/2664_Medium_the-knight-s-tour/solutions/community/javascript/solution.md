# Javascript - Simple backtracking

**Author:** pranav5
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-knights-tour/solutions/3483235/](https://leetcode.com/problems/the-knights-tour/solutions/3483235/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
One square can be visited multiple times, so we need to backtrack and clean up if a valid path cannot be found.

# Approach
<!-- Describe your approach to solving the problem. -->

Store move number in the board when you visit a square. If all moves are completed then return true. We have found an answer. If not, we will go through all the valid candidates and try to find the next valid move. If the move doesn't return the answer ( i.e true) we backtrack by setting the square to -1 to visit it again in the future and decrement the move number.

# Code
```
/**
 * @param {number} m
 * @param {number} n
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var tourOfKnight = function(m, n, r, c) {
    const board = Array(m).fill().map(() => Array(n).fill(-1));
    const numberOfSquares = m * n;
    const tour = (i, j) => {
        let moveNumber = board[i][j];
        if(moveNumber === numberOfSquares - 1) {
            return true;
        }

        let dirs = [[-1, -2], [-2, -1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2]];

        for(let [dx, dy] of dirs) {
           const x = dx + i;
           const y = dy + j;

           const validRow = x >= 0 && x < m;
           const validCol = y >= 0 && y < n;
           if(validRow && validCol && board[x][y] === -1) {
               board[x][y] = ++moveNumber;
               if(tour(x, y)) {
                   return true;
               }
               board[x][y] = -1;
               moveNumber--;
           }
        }

        return false;
    }
    board[r][c] = 0;
    tour(r, c);
    return board;
};
```