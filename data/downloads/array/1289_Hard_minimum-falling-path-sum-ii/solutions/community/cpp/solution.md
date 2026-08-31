# Easy to Understand || Short & Concise || Iterative DP

**Author:** gameboey
**Votes:** 123
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5073439/](https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5073439/)

---

# Intuition
The code employs dynamic programming to find the minimum sum of a falling path with non-zero shifts, iteratively updating the minimum sum for each cell by considering all possible paths from the previous row while avoiding stepping on the same column twice consecutively.

# Approach
Let's break down the code step by step, Jiraiya-style:

1. **Surveying the Battlefield**: Jiraiya begins by assessing the battlefield, examining the `grid` matrix. He notes that it's an `n x n` matrix and takes note of the range of values it contains (`-99` to `99`).

2. **Preparing for Battle**: Armed with this knowledge, Jiraiya prepares his strategy. He decides to use dynamic programming to solve the problem efficiently. He creates a 2D array called `dp` of size `n x n` to store the minimum falling path sums. Each element of `dp` will represent the minimum sum of a falling path ending at that position.

3. **Initializing the Battlefield**: Before diving into battle, Jiraiya sets each element of `dp` to `-1` to mark them as uninitialized. This way, he can easily identify which elements have been visited during his traversal.

4. **Starting the Descent**: Jiraiya begins his descent into the battlefield, starting from the first row of the `grid` matrix. For each cell in the first row, he sets the corresponding cell in `dp` to the value of that cell in the `grid`. After all, in the first row, there's only one choice of path \u2013 the cell itself.

5. **Traversing the Terrain**: Now, Jiraiya moves on to subsequent rows, carefully calculating the falling path sums for each cell. For each cell in the current row, he considers all possible paths from the previous row, making sure not to step on the same column twice in a row.

6. **Choosing the Path Wisely**: Jiraiya compares the falling path sums from different paths and selects the one with the minimum sum. He updates the corresponding cell in `dp` with this minimum sum.

7. **Emerging Victorious**: After reaching the last row of the battlefield, Jiraiya scans through the `dp` array to find the minimum sum among all the paths. This minimum sum represents the answer he's been seeking \u2013 the minimum sum of a falling path with non-zero shifts.

8. **Celebrating Victory**: With the mission accomplished, Jiraiya emerges victorious from the battlefield, having successfully navigated the treacherous terrain and outsmarted his opponents with his cunning strategy and ninja skills. Victory is sweet, indeed!

# Dry-Run:

Of course, let's dry run the given example step by step:

1. **Initialization**: Initialize `dp` matrix to store minimum path sums.
   - `dp` matrix:
    ```
      [ 1, 2, 3]
      [-1, -1, -1]
      [-1, -1, -1]
    ```
   - The first row of `dp` is filled with the values from the first row of the `grid`.

2. **Iteration**:
   - For each subsequent row, iterate through each column and update the `dp` matrix with the minimum sum.
   - For the second row:
     - For each cell, consider all possible paths from the previous row except for the column of the current cell.
     - Update the current cell with the minimum sum obtained from the previous row and add the value from the current grid cell.
   - The `dp` matrix after the second row iteration:
     ```
      [1, 2, 3]
      [6, 6, 7]
      [-1, -1, -1]
   ```
   - The third row will have similar calculations, resulting in:
   
    ```
    ```
     [ 1,  2,  3]
     [ 6,  6,  7]
     [13, 14, 15]
    ```

3. **Minimum Sum**: Find the minimum sum from the last row of the `dp` matrix.
   - The minimum sum is 13, which corresponds to the falling path `[1, 5, 7]`.

4. **Output**: Return the minimum sum, which is 13.

So, the output of the dry run matches the expected output of 13 for the given input grid.

# Complexity
- Time complexity: O(n * n * n)

- Space complexity: O(n * n)

```C++ []
class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& grid) {
        int n = grid.size(), res = INT_MAX;
        vector<vector<int>> dp(n, vector<int>(n, -1));

        for(int j = 0; j < n; ++j) {
            dp[0][j] = grid[0][j];
        }

        for(int i = 1; i < n; ++i) {
            for(int j = 0; j < n; ++j) {
                int temp = INT_MAX;

                for(int k = 0; k < n; ++k) {
                    if(k != j) {
                        temp = min(temp, grid[i][j] + dp[i - 1][k]);
                    }

                    dp[i][j] = temp;
                }
            }
        }

        for(int j = 0; j < n; ++j) {
            res = min(res, dp[n - 1][j]);
        }

        return res;
    }
};
```
```java []
class Solution {
    public int minFallingPathSum(int[][] grid) {
        int n = grid.length, res = Integer.MAX_VALUE;
        int[][] dp = new int[n][n];
        for(int row[] : dp) {
            Arrays.fill(row, -1);
        }

        for(int j = 0; j < n; ++j) {
            dp[0][j] = grid[0][j];
        }

        for(int i = 1; i < n; ++i) {
            for(int j = 0; j < n; ++j) {
                int temp = Integer.MAX_VALUE;

                for(int k = 0; k < n; ++k) {
                    if(j != k) {
                        temp = Math.min(temp, grid[i][j] + dp[i - 1][k]);
                    }

                    dp[i][j] = temp;
                }
            }
        }

        for(int j = 0; j < n; ++j) {
            res = Math.min(res, dp[n - 1][j]);
        }

        return res;
    }
}
```
```python []
class Solution:
    def minFallingPathSum(self, grid: List[List[int]]) -> int:
        n, res = len(grid), float('inf')
        dp = [[-1] * n for _ in range(n)]

        for j in range(n):
            dp[0][j] = grid[0][j]

        for i in range(1, n):
            for j in range(n):
                temp = float('inf')

                for k in range(n):
                    if j != k:
                        temp = min(temp, grid[i][j] + dp[i - 1][k])

                dp[i][j] = temp

        for j in range(n):
            res = min(res, dp[n - 1][j])

        return res
```
```javascript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
    const n = grid.length;
    let res = Infinity;
    const dp = new Array(n).fill().map(() => new Array(n).fill(-1));

    for(let j = 0; j < n; ++j) {
        dp[0][j] = grid[0][j];
    }

    for(let i = 1; i < n; ++i) {
        for(let j = 0; j < n; ++j) {
            let temp = Infinity;

            for(let k = 0; k < n; ++k) {
                if(j !== k) {
                    temp = Math.min(temp, grid[i][j] + dp[i - 1][k]);
                }
            }

            dp[i][j] = temp;
        }
    }

    for(let j = 0; j < n; ++j) {
        res = Math.min(res, dp[n - 1][j]);
    }

    return res;
};

```
![jiraiya.jpeg](./images/0.jpeg)
