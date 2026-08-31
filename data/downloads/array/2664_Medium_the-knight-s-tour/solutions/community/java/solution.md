# Java Backtracking solution

**Author:** aranlucas
**Votes:** 6
**Link:** [https://leetcode.com/problems/the-knights-tour/solutions/3485987/](https://leetcode.com/problems/the-knights-tour/solutions/3485987/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem is asking to explore the different moves around a board. At first, it may seem like a DFS problem, but what you'll encounter is that you may need to go back on a path if you find that you can't fill the entire board. This lends itself to being a backtracking solution.

# Approach
<!-- Describe your approach to solving the problem. -->

This follows the usual backtracking template

```
public int backtrack(STATE curr, OTHER_ARGUMENTS...) {
    if (BASE_CASE) {
        // modify the answer
        return 0;
    }

    int ans = 0;
    for (ITERATE_OVER_INPUT) {
        if is_valid(next_candidate){
            // modify the current state
            // try this partial candidate solution
            place(next_candidate)
            backtrack(curr, OTHER_ARGUMENTS...)
            // undo the modification of the current state
            remove(next_candidate)
        }
    }
}
```

Breaking it down.

(BASE_CASE)
* If we manage to go through the entire board, we return that answer
* Remember that intermediate result in backtracking WILL contiue to be modified. This means you need to return a full copy rather than the "current" value.


(ITERATE_OVER_INPUT)
* A knight can go in 8 different directions

isValid(candiate)
* If candidate is out of bounds, don't explore

place(candidate)
* Increase level
* Mark candidate spot with the level

remove(candidate)
* Clean up what the place(candidate) step did (Decrease the leve, mark the board)

# Code
```
class Solution {
    int[][] DIRS = {
      { 2, 1},
      { 2, -1},
      { -2, 1},
      { -2, -1},
      { 1, 2},
      { 1, -2},
      { -1, 2},
      { -1, -2},
    };
    public int[][] tourOfKnight(int m, int n, int r, int c) {
        int[][] board = new int[m][n];
        int[][] result = new int[m][n];

        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++ ) {
                board[i][j] = -1;
            }
        }
        board[r][c] = 0;
        backtrack(r, c, 0, m, n, result, board);
        return result;
    }

    public void backtrack(int i, int j, int step, int m, int n, int[][] result, int[][] currBoard) {
        // Base Case
        if (step == m * n - 1) {
            for (int k = 0; k < m; k++) {
                for (int l = 0; l < n; l++) {
                    result[k][l] = currBoard[k][l];
                }
            }
            return;
        }
        // Candidates
        for (int[] dir: DIRS) {
            int dx = dir[0] + i;
            int dy = dir[1] + j;

            // Check if valid candidate
            if (dx >= 0 && dx < m && dy >= 0 && dy < n && currBoard[dx][dy] == -1) {
                // Place candidate
                step++;
                currBoard[dx][dy] = step;

                // Backtrack
                backtrack(dx, dy, step, m, n, result, currBoard);              
                // Remove candidate / cleanup
                currBoard[dx][dy] = -1;;
                step--;
            }
        }
    }
}
```