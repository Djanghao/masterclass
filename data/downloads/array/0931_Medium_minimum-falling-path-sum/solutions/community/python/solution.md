# ✅☑Beats 99.30% Users || [C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 66
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum/solutions/4589812/](https://leetcode.com/problems/minimum-falling-path-sum/solutions/4589812/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2024-01-19 053507.png](./images/0.png)

---


# Approaches
(Also explained in the code)


1. **Initialization:** Initialize a 2D vector `dp` to store the minimum falling path sum for each cell. Initialize `ans` to `INT_MAX` as the result.

1. **Base Cases:** If the matrix has only one row or one column, return the only element in the matrix as the minimum falling path sum.

1. **Iterative Over First Row:** Iterate over the elements in the first row of the matrix and find the minimum falling path sum by calling a recursive function `minFallingPathSum` for each element.

1. **Recursive Function:** The `minFallingPathSum` function calculates the minimum falling path sum recursively. It uses memoization to avoid redundant calculations. If the result for a particular cell is already calculated, it is directly returned from the memoized table.

1. **Dynamic Programming:** For each cell, calculate the minimum falling path sum considering three possible directions: left, straight, and right. Update the memoized table with the minimum sum.

1. **Return Result:** Return the minimum falling path sum obtained from iterating over the first row.

# Complexity
- Time complexity:
   $$O(m*n)$$
    

- Space complexity:
   $$O(m*n)$$
    


# Code
```C++ []

class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& A) {
        int m = A.size();
        int n = A[0].size();

        if (m == 1 || n == 1) return A[0][0];

        vector<vector<int>> dp(m,vector<int>(n, INT_MAX));
        int ans = INT_MAX;

        for (int i = 0; i < A.size(); ++i) {
            ans = min(ans, minFallingPathSum(A, 0, i, dp));
        }

        return ans;
    }

    int minFallingPathSum(vector<vector<int>>& A, int row, int col,  vector<vector<int>>& dp) {
        int m = A.size();
        int n = A[0].size();

        if (dp[row][col] != INT_MAX) return dp[row][col];

        if (row == m - 1)
            return dp[row][col] = A[row][col];

        int left = INT_MAX, right = INT_MAX;

        if (col > 0)
            left = minFallingPathSum(A, row + 1, col - 1, dp);

        int straight = minFallingPathSum(A, row + 1, col, dp);

        if (col < n - 1)
            right = minFallingPathSum(A, row + 1, col + 1, dp);

        dp[row][col] = min(left, min(straight, right)) + A[row][col];

        return dp[row][col];
    }
};



```
```Java []


public class Solution {
    public int minFallingPathSum(int[][] A) {
        int m = A.length;
        int n = A[0].length;

        if (m == 1 || n == 1) return A[0][0];

        int[][] dp = new int[m][n];
        for (int[] row : dp) {
            Arrays.fill(row, Integer.MAX_VALUE);
        }
        
        int ans = Integer.MAX_VALUE;

        for (int i = 0; i < A.length; ++i) {
            ans = Math.min(ans, minFallingPathSum(A, 0, i, dp));
        }

        return ans;
    }

    private int minFallingPathSum(int[][] A, int row, int col, int[][] dp) {
        int m = A.length;
        int n = A[0].length;

        if (dp[row][col] != Integer.MAX_VALUE) return dp[row][col];

        if (row == m - 1)
            return dp[row][col] = A[row][col];

        int left = Integer.MAX_VALUE, right = Integer.MAX_VALUE;

        if (col > 0)
            left = minFallingPathSum(A, row + 1, col - 1, dp);

        int straight = minFallingPathSum(A, row + 1, col, dp);

        if (col < n - 1)
            right = minFallingPathSum(A, row + 1, col + 1, dp);

        dp[row][col] = Math.min(left, Math.min(straight, right)) + A[row][col];

        return dp[row][col];
    }
}


```
```python3 []
class Solution:
    def minFallingPathSum(self, A: List[List[int]]) -> int:
        m, n = len(A), len(A[0])

        if m == 1 or n == 1:
            return A[0][0]

        dp = [[float('inf')] * n for _ in range(m)]
        ans = float('inf')

        for i in range(len(A)):
            ans = min(ans, self.minFallingPathSumHelper(A, 0, i, dp))

        return ans

    def minFallingPathSumHelper(self, A, row, col, dp):
        m, n = len(A), len(A[0])

        if dp[row][col] != float('inf'):
            return dp[row][col]

        if row == m - 1:
            return A[row][col]

        left = right = float('inf')

        if col > 0:
            left = self.minFallingPathSumHelper(A, row + 1, col - 1, dp)

        straight = self.minFallingPathSumHelper(A, row + 1, col, dp)

        if col < n - 1:
            right = self.minFallingPathSumHelper(A, row + 1, col + 1, dp)

        dp[row][col] = min(left, min(straight, right)) + A[row][col]

        return dp[row][col]



```
```javascript []

class Solution {
    minFallingPathSum(A) {
        const m = A.length;
        const n = A[0].length;

        if (m === 1 || n === 1) return A[0][0];

        const dp = Array.from({ length: m }, () => Array(n).fill(Number.MAX_SAFE_INTEGER));
        let ans = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < A.length; ++i) {
            ans = Math.min(ans, this.minFallingPathSumHelper(A, 0, i, dp));
        }

        return ans;
    }

    minFallingPathSumHelper(A, row, col, dp) {
        const m = A.length;
        const n = A[0].length;

        if (dp[row][col] !== Number.MAX_SAFE_INTEGER) return dp[row][col];

        if (row === m - 1) {
            return dp[row][col] = A[row][col];
        }

        let left = Number.MAX_SAFE_INTEGER, right = Number.MAX_SAFE_INTEGER;

        if (col > 0) {
            left = this.minFallingPathSumHelper(A, row + 1, col - 1, dp);
        }

        const straight = this.minFallingPathSumHelper(A, row + 1, col, dp);

        if (col < n - 1) {
            right = this.minFallingPathSumHelper(A, row + 1, col + 1, dp);
        }

        dp[row][col] = Math.min(left, Math.min(straight, right)) + A[row][col];

        return dp[row][col];
    }
}


```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---