# Easy Video Solution 🔥 || How to 🤔 in Interview || Precompute Sum || Dynamic Programming

**Author:** ayushnemmaniwar12
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5431750/](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5431750/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you can derive the formula



***Easy Video Explanation***
https://youtu.be/auFt_ldukp0
    

# Code


```C++ []
class Solution {
public:
    vector<vector<int>> calculatePrefixSum(vector<vector<char>>& grid, char targetChar) {
        int rows = grid.size();
        int cols = grid[0].size();
        
        vector<vector<int>> prefixSum(rows, vector<int>(cols, 0));
        for (int row = 0; row < rows; ++row) {
            for (int col = 0; col < cols; ++col) {
                prefixSum[row][col] = (grid[row][col] == targetChar);
                if (row > 0) prefixSum[row][col] += prefixSum[row - 1][col];
                if (col > 0) prefixSum[row][col] += prefixSum[row][col - 1];
                if (row > 0 && col > 0) prefixSum[row][col] -= prefixSum[row - 1][col - 1];
            }
        }
        
        return prefixSum;
    }
    
    int numberOfSubmatrices(vector<vector<char>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        
        vector<vector<int>> xCountPrefixSum = calculatePrefixSum(grid, 'X');
        vector<vector<int>> yCountPrefixSum = calculatePrefixSum(grid, 'Y');
        
        int matchingSubmatricesCount = 0;
        for (int row = 0; row < rows; ++row) {
            for (int col = 0; col < cols; ++col) {
                if (xCountPrefixSum[row][col] == yCountPrefixSum[row][col] && xCountPrefixSum[row][col] > 0) {
                    matchingSubmatricesCount++;
                }
            }
        }
        return matchingSubmatricesCount;
    }
};
```
```python []
class Solution:
    def calculatePrefixSum(self, grid: List[List[str]], targetChar: str) -> List[List[int]]:
        rows = len(grid)
        cols = len(grid[0])
        
        prefixSum = [[0] * cols for _ in range(rows)]
        for row in range(rows):
            for col in range(cols):
                prefixSum[row][col] = 1 if grid[row][col] == targetChar else 0
                if row > 0: prefixSum[row][col] += prefixSum[row - 1][col]
                if col > 0: prefixSum[row][col] += prefixSum[row][col - 1]
                if row > 0 and col > 0: prefixSum[row][col] -= prefixSum[row - 1][col - 1]
        
        return prefixSum
    
    def numberOfSubmatrices(self, grid: List[List[str]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        
        xCountPrefixSum = self.calculatePrefixSum(grid, 'X')
        yCountPrefixSum = self.calculatePrefixSum(grid, 'Y')
        
        matchingSubmatricesCount = 0
        for row in range(rows):
            for col in range(cols):
                if xCountPrefixSum[row][col] == yCountPrefixSum[row][col] and xCountPrefixSum[row][col] > 0:
                    matchingSubmatricesCount += 1
        
        return matchingSubmatricesCount

```
```Java []

import java.util.*;

public class Solution {
    public int[][] calculatePrefixSum(char[][] grid, char targetChar) {
        int rows = grid.length;
        int cols = grid[0].length;
        
        int[][] prefixSum = new int[rows][cols];
        for (int row = 0; row < rows; ++row) {
            for (int col = 0; col < cols; ++col) {
                prefixSum[row][col] = (grid[row][col] == targetChar ? 1 : 0);
                if (row > 0) prefixSum[row][col] += prefixSum[row - 1][col];
                if (col > 0) prefixSum[row][col] += prefixSum[row][col - 1];
                if (row > 0 && col > 0) prefixSum[row][col] -= prefixSum[row - 1][col - 1];
            }
        }
        
        return prefixSum;
    }
    
    public int numberOfSubmatrices(char[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        
        int[][] xCountPrefixSum = calculatePrefixSum(grid, 'X');
        int[][] yCountPrefixSum = calculatePrefixSum(grid, 'Y');
        
        int matchingSubmatricesCount = 0;
        for (int row = 0; row < rows; ++row) {
            for (int col = 0; col < cols; ++col) {
                if (xCountPrefixSum[row][col] == yCountPrefixSum[row][col] && xCountPrefixSum[row][col] > 0) {
                    matchingSubmatricesCount++;
                }
            }
        }
        return matchingSubmatricesCount;
    }
}

```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N*N)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00