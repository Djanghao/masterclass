# Number of Paths with Max Score

**Author:** Sam_Neamah
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-paths-with-max-score/solutions/4722017/](https://leetcode.com/problems/number-of-paths-with-max-score/solutions/4722017/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    const MOD = 1e9 + 7;
    const rows = board.length;
    const cols = board[0].length;

    // Create a DP array to store the maximum sum and number of paths
    const dp = Array.from({ length: rows }, () => Array(cols).fill(null));

    // Initialize the bottom-right cell
    dp[rows - 1][cols - 1] = { sum: 0, paths: 1 };

    // Fill the last column
    for (let i = rows - 2; i >= 0; i--) {
        if (board[i][cols - 1] !== 'X' && dp[i + 1][cols - 1]) {
            dp[i][cols - 1] = { sum: dp[i + 1][cols - 1].sum + parseInt(board[i][cols - 1]), paths: 1 };
        }
    }

    // Fill the last row
    for (let j = cols - 2; j >= 0; j--) {
        if (board[rows - 1][j] !== 'X' && dp[rows - 1][j + 1]) {
            dp[rows - 1][j] = { sum: dp[rows - 1][j + 1].sum + parseInt(board[rows - 1][j]), paths: 1 };
        }
    }

    // Fill the rest of the DP array
    for (let i = rows - 2; i >= 0; i--) {
        for (let j = cols - 2; j >= 0; j--) {
            if (board[i][j] !== 'X') {
                let maxSum = -Infinity;
                let paths = 0;

                // Check the three possible directions: down, right, and diagonal
                for (let [dx, dy] of [[1, 0], [0, 1], [1, 1]]) {
                    const x = i + dx;
                    const y = j + dy;

                    if (x < rows && y < cols && dp[x][y]) {
                        const neighborSum = dp[x][y].sum;
                        if (neighborSum > maxSum) {
                            maxSum = neighborSum;
                            paths = dp[x][y].paths;
                        } else if (neighborSum === maxSum) {
                            paths = (paths + dp[x][y].paths) % MOD;
                        }
                    }
                }

                if (maxSum !== -Infinity) {
                    dp[i][j] = { sum: maxSum + (board[i][j] === 'E' ? 0 : parseInt(board[i][j])), paths };
                }
            }
        }
    }

    // Check if there's a valid path from the starting point to the ending point
    if (!dp[0][0]) {
        return [0, 0];
    }

    return [dp[0][0].sum % MOD, dp[0][0].paths % MOD];
};
```