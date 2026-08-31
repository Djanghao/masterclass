# 221: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 23
**Link:** [https://leetcode.com/problems/maximal-square/solutions/3227575/](https://leetcode.com/problems/maximal-square/solutions/3227575/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This problem can be solved using dynamic programming. We can define a 2D array dp where dp[i][j] represents the maximum size of a square that can be formed at position (i, j) such that all its elements are 1's. We can fill this array using the following recurrence relation:

- dp[i][j] = 0 if matrix[i][j] == '0'
- dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1 if matrix[i][j] == '1'

The first condition means that if the current cell has a value of 0, we can't form a square with it. The second condition means that if the current cell has a value of 1, we can form a square with it, but we need to check the values of the cells to the left, top, and top-left of it to determine the maximum size of the square.

We also need to keep track of the maximum size of the square seen so far, and return its area.

# Complexity
- Time complexity:
Beats
88.37% O(m*n), where m and n are the dimensions of the matrix.

- Space complexity:
Beats
88.43% O(m*n), where m and n are the dimensions of the matrix, since we are using a 2D array of the same size as the matrix to store the dp values.

# Code
```
class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        # Get the dimensions of the matrix
        m, n = len(matrix), len(matrix[0])
        
        # Initialize the dp array
        dp = [[0] * n for _ in range(m)]
        
        # Initialize the max size of the square seen so far
        max_size = 0
        
        # Fill the dp array
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == '1':
                    if i == 0 or j == 0:
                        # First row or column, so the maximum size of the square is 1
                        dp[i][j] = 1
                    else:
                        # Check the values of the cells to the left, top, and top-left of the current cell
                        dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
                    
                    # Update the max size of the square seen so far
                    max_size = max(max_size, dp[i][j])
        
        # Return the area of the largest square
        return max_size * max_size

```