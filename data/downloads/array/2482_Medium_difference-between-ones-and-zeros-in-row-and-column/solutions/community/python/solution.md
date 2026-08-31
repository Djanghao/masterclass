# ✅Beats 100% - Explained With [ Video ] - Count Row and Column 1s - C++/Java/Python/JS  - Visualized

**Author:** lancertech6
**Votes:** 121
**Link:** [https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4401899/](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4401899/)

---

![Screenshot 2023-12-14 075427.png](./images/0.png)


# YouTube Video Explanation:

[https://youtu.be/d6Q7W81IkOs](https://youtu.be/d6Q7W81IkOs)
<!-- **If you want a video for this question please write in the comments** -->

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 800 Subscribers*
*Current Subscribers: 773*

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to create a difference matrix `diff`, where each element `diff[i][j]` is calculated based on the number of ones and zeros in the corresponding row and column of the original matrix `grid`. The formula for each element is:

***`diff[i][j]=onesRow[i]+onesCol[j]\u2212zerosRow[i]\u2212zerosCol[j]`***

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize arrays `rowOnes` and `colOnes` to store the count of ones in each row and each column, respectively.
2. Traverse the `grid` matrix to populate the `rowOnes` and `colOnes` arrays.
3. Iterate through the `grid` matrix again and calculate each element of the `diff` matrix using the provided formula.
4. Update each element of the `grid` matrix with the calculated difference.
5. Return the modified `grid` matrix as the resulting `diff`.

# Complexity
- Time complexity: `O(m x n)`, where \\(m\\) is the number of rows and \\(n\\) is the number of columns in the `grid` matrix.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `(O(m + n)` for the `rowOnes` and `colOnes` arrays.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int[][] onesMinusZeros(int[][] grid) {
        int[] rowOnes = new int[grid.length];
        int[] colOnes = new int[grid[0].length];
        for(int i = 0; i < grid.length; i++) {
            for(int j = 0; j < grid[0].length; j++) {
                rowOnes[i] += grid[i][j];
                colOnes[j] += grid[i][j];
            }
        }
        for(int i = 0; i < grid.length; i++) {
            for(int j = 0; j < grid[0].length; j++) {
                grid[i][j] = 2 * (rowOnes[i] + colOnes[j]) - grid.length - grid[0].length;
            }
        }

        return grid;
    }
}
```
```C++ []
class Solution {
public:
    vector<vector<int>> onesMinusZeros(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();

        vector<int> rowOnes(m, 0);
        vector<int> colOnes(n, 0);

        // Count ones in each row and column
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                rowOnes[i] += grid[i][j];
                colOnes[j] += grid[i][j];
            }
        }

        // Calculate the difference matrix
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                grid[i][j] = 2 * (rowOnes[i] + colOnes[j]) - m - n;
            }
        }

        return grid;
    }
};
```
```Python []
class Solution(object):
    def onesMinusZeros(self, grid):
        m, n = len(grid), len(grid[0])

        row_ones = [0] * m
        col_ones = [0] * n

        # Count ones in each row and column
        for i in range(m):
            for j in range(n):
                row_ones[i] += grid[i][j]
                col_ones[j] += grid[i][j]

        # Calculate the difference matrix
        for i in range(m):
            for j in range(n):
                grid[i][j] = 2 * (row_ones[i] + col_ones[j]) - m - n

        return grid
        
```
```JavaScript []
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const rowOnes = new Array(m).fill(0);
    const colOnes = new Array(n).fill(0);

    // Count ones in each row and column
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            rowOnes[i] += grid[i][j];
            colOnes[j] += grid[i][j];
        }
    }

    // Calculate the difference matrix
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            grid[i][j] = 2 * (rowOnes[i] + colOnes[j]) - m - n;
        }
    }

    return grid;
};
```
![upvote.png](./images/1.png)
