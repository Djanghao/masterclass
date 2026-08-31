# Simplified solution

**Author:** kieubaduong
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4814216/](https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4814216/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
You see this solution means that you don't know prefix sum or at least you don't know prefix sum in 2D. First, you need to understand how to calculate prefix sum in 2D.

# Approach
<!-- Describe your approach to solving the problem. -->
Let's visualize a 2D array and the prefix sum calculation.
Consider a 3x3 grid:
```
grid = [
  [a, b, c],
  [d, e, f],
  [g, h, i]
]
```
And the corresponding prefix sum array:
```
prefix = [
  [0, 0, 0, 0],
  [0, a, a+b, a+b+c],
  [0, a+d, a+b+d+e, a+b+c+d+e+f],
  [0, a+d+g, a+b+d+e+g+h, a+b+c+d+e+f+g+h+i]
]
```

Let's say we're at position `(2,2)` in the prefix array (corresponding to position `(1,1)` in the grid). The variables `prefixAbove`, `prefixLeft`, and `prefixDiagonal` are defined as follows:

- `prefixAbove` is the prefix sum above the current position. In this case, it's `a+b`.

- `prefixLeft` is the prefix sum to the left of the current position. In this case, it's `a+d`.

- `prefixDiagonal` is the prefix sum diagonally above and to the left of the current position. In this case, it's `a`.

The calculation `currentGridValue + prefixAbove + prefixLeft - prefixDiagonal` gives us the sum of all elements in the submatrix from the top-left corner to the current position. In this case, it's `e + (a+b) + (a+d) - a = a+b+d+e`, which is the sum of elements `a`, `b`, `d`, and `e`.

> So, you can see that every element in the prefix array is the sum of all elements in the submatrix from the top-left corner to the current position.

We will iterate over all possible submatrices starting from the top-left corner and calculate the sum of each submatrix. If the sum is less than or equal to `k`, we will increment the count.

# Complexity
`m` is the number of rows and `n` is the number of columns in the grid.
- Time complexity: $$O(m \\cdot n)$$

- Space complexity: $$O(m \\cdot n)$$

# Code
```C++ []
class Solution {
public:
    int countSubmatrices(vector<vector<int>>& grid, int k) {
        int m = grid.size(), n = grid[0].size();
        vector<vector<int>> prefix(m+1, vector<int>(n+1, 0));
        int count = 0;

        // Calculate prefix sum
        for(int row = 1; row <= m; row++) {
            for(int col = 1; col <= n; col++) {
                int currentGridValue = grid[row-1][col-1];
                int prefixAbove = prefix[row-1][col];
                int prefixLeft = prefix[row][col-1];
                int prefixDiagonal = prefix[row-1][col-1];

                prefix[row][col] = currentGridValue + prefixAbove + prefixLeft - prefixDiagonal;
            }
        }

        // Iterate over all possible submatrices starting from the top-left corner
        for(int i = 1; i <= m; i++) {
            for(int j = 1; j <= n; j++) {
                // Calculate sum of the submatrix from (0,0) to (i,j)
                int sum = prefix[i][j];
                if(sum <= k) {
                    count++;
                }
            }
        }

        return count;
    }
};
```
```Java []
class Solution {
    public int countSubmatrices(int[][] grid, int k) {
        int m = grid.length, n = grid[0].length;
        int[][] prefix = new int[m+1][n+1];
        int count = 0;

        // Calculate prefix sum
        for(int row = 1; row <= m; row++) {
            for(int col = 1; col <= n; col++) {
                int currentGridValue = grid[row-1][col-1];
                int prefixAbove = prefix[row-1][col];
                int prefixLeft = prefix[row][col-1];
                int prefixDiagonal = prefix[row-1][col-1];
        
                prefix[row][col] = currentGridValue + prefixAbove + prefixLeft - prefixDiagonal;
            }
        }

        // Iterate over all possible submatrices starting from the top-left corner
        for(int i = 1; i <= m; i++) {
            for(int j = 1; j <= n; j++) {
                // Calculate sum of the submatrix from (0,0) to (i,j)
                int sum = prefix[i][j];
                if(sum <= k) {
                    count++;
                }
            }
        }

        return count;
    }
}
```
```Kotlin []
class Solution {
    fun countSubmatrices(grid: Array<IntArray>, k: Int): Int {
        val m = grid.size
        val n = grid[0].size
        val prefix = Array(m + 1) { IntArray(n + 1) }
        var count = 0

        // Calculate prefix sum
        for (row in 1..m) {
            for (col in 1..n) {
                val currentGridValue = grid[row - 1][col - 1]
                val prefixAbove = prefix[row - 1][col]
                val prefixLeft = prefix[row][col - 1]
                val prefixDiagonal = prefix[row - 1][col - 1]

                prefix[row][col] = currentGridValue + prefixAbove + prefixLeft - prefixDiagonal
            }
        }

        // Iterate over all possible submatrices starting from the top-left corner
        for (i in 1..m) {
            for (j in 1..n) {
                // Calculate sum of the submatrix from (0,0) to (i,j)
                val sum = prefix[i][j]
                if (sum <= k) {
                    count++
                }
            }
        }

        return count
    }
}
```