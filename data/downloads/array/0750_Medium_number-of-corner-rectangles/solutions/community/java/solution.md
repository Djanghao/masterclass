# Java | TC: O(max(M,N)*(min(M,N))^2) | Space Optimized & Sparse Matrix FollowUp

**Author:** NarutoBaryonMode
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-corner-rectangles/solutions/1527239/](https://leetcode.com/problems/number-of-corner-rectangles/solutions/1527239/)

---

**Space Optimized Solution**

```java
/**
 * To find a corner rectangle, the idea is to fix two rows (or two columns)
 * first, then check column by column (or row by row) to find "1" on both rows.
 * Say you find n pairs, then just pick any 2 of those to form a corner
 * rectangle. Total Number of corner rectangles for these 2 rows will be C(N,2)
 * (Combination)
 *
 * Time Complexity: O(max(M,N) * (min(M,N))^2)
 *
 * Space Complexity: O(1)
 *
 * M = Number of rows. N = Number of cols.
 */
class Solution {
    public int countCornerRectangles(int[][] grid) {
        if (grid == null || grid.length <= 1 || grid[0].length <= 1) {
            return 0;
        }

        int rows = grid.length;
        int cols = grid[0].length;

        if (rows < cols) {
            return helper(grid, rows, cols, true);
        } else {
            return helper(grid, cols, rows, false);
        }
    }

    private int helper(int[][] grid, int small, int big, boolean isRowsSmall) {
        int result = 0;
        for (int i = 0; i < small - 1; i++) {
            for (int j = i + 1; j < small; j++) {
                int count = 0;
                for (int k = 0; k < big; k++) {
                    if (isRowsSmall) {
                        count += grid[i][k] & grid[j][k];
                    } else {
                        count += grid[k][i] & grid[k][j];
                    }
                }
                result += count * (count - 1) / 2;
            }
        }
        return result;
    }
}
```

---
**Following solution is optimized for Sparse Matrix**

```java
/**
 * This solution is optimized for Sparse Matrix
 *
 * Time Complexity: O(M * N^2) --> Here we can also run the other loop on cols
 * and inner loops on rows. In that case, the time complexity will be O(M^2 * N)
 *
 * Space Complexity: O(N^2) --> This can be optimized by using a hashmap
 *
 * M = Number of rows. N = Number of cols.
 */
class Solution {
    public int countCornerRectangles(int[][] grid) {
        if (grid == null || grid.length <= 1 || grid[0].length <= 1) {
            return 0;
        }

        int rows = grid.length;
        int cols = grid[0].length;
        int[][] dp = new int[cols][cols];
        int result = 0;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 0) {
                    continue;
                }
                for (int k = j + 1; k < cols; k++) {
                    if (grid[i][k] == 0) {
                        continue;
                    }
                    result += dp[j][k];
                    dp[j][k]++;
                }
            }
        }

        return result;
    }
}
```