# 🚀🚀🚀 DP - EASiLY EXPLAiNED 🚀🚀🚀

**Author:** prodonik
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum/solutions/4589944/](https://leetcode.com/problems/minimum-falling-path-sum/solutions/4589944/)

---

# Intuition

## Dynamic Programming:

    Recognize that the minimum falling path sum to a cell depends on the minimum falling path sums of its immediate downward neighbors in the next row.
    This suggests a dynamic programming approach where we build up the minimum falling path sums from the bottom of the matrix to the top.

# Approach

    Base Case: If the matrix has only one element, return that element as the minimum falling path sum.
    Create a DP Table: Create a 2D array dp with the same dimensions as the input matrix. Initialize dp with the values from the input matrix.
    Iterate from Bottom to Top: Iterate through the rows of the matrix from the second-to-last row to the first row (top-down approach).
    Iterate through Each Cell: For each cell in the current row:
        Find the minimum value among its three possible downward neighbors in the next row (dp[i + 1][j], dp[i + 1][j - 1], and dp[i + 1][j + 1], handling edge cases for boundaries).
        Add this minimum value to the current cell's value in dp.
    Find the Minimum in the First Row: After the DP table is filled, find the minimum value in the first row of dp. This value represents the minimum falling path sum.

# Complexity

    Time complexity: O(n^2), where n is the number of rows (and columns) in the matrix. We iterate through each cell of the matrix once.
    Space complexity: O(n^2), due to the dp table used to store the intermediate results.
# Code
```Java []
class Solution {
    public int minFallingPathSum(int[][] matrix) {
        if (matrix.length == 1) {
            return matrix[0][0];
        }
        int[][] dp = Arrays.copyOf(matrix, matrix.length); 
        for (int i = matrix.length - 2; i >= 0; i--) {
            for (int j = 0; j < matrix.length; j++) {
                int minPath = dp[i + 1][j];
                if (j > 0) {
                    minPath = Math.min(minPath, dp[i + 1][j - 1]);
                }
                if (j < matrix.length - 1) {
                    minPath = Math.min(minPath, dp[i + 1][j + 1]);
                }
                dp[i][j] += minPath;
            }
        }

        int result = Integer.MAX_VALUE;
        for (int num : dp[0]) {
            result = Math.min(result, num);
        }
        return result;
    }
}

```
```C++ []
class Solution {
public:
    int minFallingPathSum(std::vector<std::vector<int>>& matrix) {
        if (matrix.size() == 1) {
            return matrix[0][0];
        }
        int n = matrix.size();
        std::vector<std::vector<int>> dp(matrix); 
        for (int i = n - 2; i >= 0; i--) {
            for (int j = 0; j < n; j++) {
                int minPath = dp[i + 1][j];
                if (j > 0) {
                    minPath = std::min(minPath, dp[i + 1][j - 1]);
                }
                if (j < n - 1) {
                    minPath = std::min(minPath, dp[i + 1][j + 1]);
                }
                dp[i][j] += minPath;
            }
        }

        int result = INT_MAX;
        for (int num : dp[0]) {
            result = std::min(result, num);
        }
        return result;
    }
};
```
```Python []
class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        if len(matrix) == 1:
            return matrix[0][0]
        n = len(matrix)
        dp = [[0] * n for _ in range(n)]
        dp = matrix.copy() 
        for i in range(n - 2, -1, -1):
            for j in range(n):
                min_path = dp[i + 1][j]
                if j > 0:
                    min_path = min(min_path, dp[i + 1][j - 1])
                if j < n - 1:
                    min_path = min(min_path, dp[i + 1][j + 1])
                dp[i][j] += min_path

        result = float('inf')
        for num in dp[0]:
            result = min(result, num)
        return result

```
```Go []
func minFallingPathSum(matrix [][]int) int {
    if len(matrix) == 1 {
        return matrix[0][0]
    }
    n := len(matrix)
    dp := make([][]int, n)
    for i := range dp {
        dp[i] = make([]int, n)
        copy(dp[i], matrix[i])
    }
    for i := n - 2; i >= 0; i-- {
        for j := 0; j < n; j++ {
            minPath := dp[i+1][j]
            if j > 0 {
                minPath = min(minPath, dp[i+1][j-1])
            }
            if j < n-1 {
                minPath = min(minPath, dp[i+1][j+1])
            }
            dp[i][j] += minPath
        }
    }

    result := math.MaxInt32
    for _, num := range dp[0] {
        result = min(result, num)
    }
    return result
}

```
```Ruby []
def min_falling_path_sum(matrix)
    return matrix[0][0] if matrix.size == 1
    n = matrix.size
    dp = matrix.map(&:clone) # Initialize dp with matrix values
    (n - 2).downto(0) do |i|
      0.upto(n - 1) do |j|
        min_path = dp[i + 1][j]
        min_path = [min_path, dp[i + 1][j - 1]].min if j > 0
        min_path = [min_path, dp[i + 1][j + 1]].min if j < n - 1
        dp[i][j] += min_path
      end
    end

    dp[0].min
end

```