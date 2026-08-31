# ✅BEATS 100% | ✅SUPER EASY | ✅CLEAN, CONCISE, OPTIMIZED | ✅MULTI LANG | ✅CODING MADE FUN

**Author:** arib21
**Votes:** 35
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5146071/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5146071/)

---

# Submission SS :
![image.png](./images/0.png)


# Intuition : Sliding Window

# Approach
Here's a structured and concise breakdown:

1. **Calculate Size of Resulting 2D Array (`ans`)**:
   - Subtract 2 from the length of the input grid (`n`) to determine the size of the resulting array (`m`).
   - Initialize a 2D array `ans` with dimensions `(m) x (m)`.

2. **Iterate Over Each Position in `ans`**:
   - Iterate from `(0, 0)` to `(m-1, m-1)`.
   - For each position `(i, j)` in `ans`, find the largest value in the corresponding 3x3 region of the input grid.

3. **Find Largest Value in Each 3x3 Region**:
   - Call the `largestLocalUtil` method for each position `(i, j)` in `ans`.
   - In the `largestLocalUtil` method:
     - Initialize a variable `max` to 0.
     - Iterate over a 3x3 grid starting from position `(i, j)`.
     - Update `max` to hold the maximum value found in the region.
     - Return the maximum value found in the 3x3 region (`max`).

4. **Store Maximum Values in `ans`**:
   - Populate `ans` with the maximum values found in each local 3x3 region of the input grid.

5. **Return Resulting 2D Array `ans`**:
   - `ans` contains the largest values in each local 3x3 region of the input grid.

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O((n-2)^2)$$ ~ $$O(n^2)$$, 

# Code
``` Java []
class Solution {

    public int largestLocalUtil(int[][] grid, int x, int y) {
        int max = 0;
        
        for (int i = x ; i < x+3 ; i++) {
            for (int j = y ; j < y+3 ; j++) {
                max = Math.max(max, grid[i][j]);
            }
        }
        
        return max;
    }
    
    public int[][] largestLocal(int[][] grid) {
        int n = grid.length;
        
        int m = n-2;
        
        int[][] ans = new int[m][m];
        
        for (int i = 0 ; i < m ; i++) {
            for (int j = 0 ; j < m ; j++) {
                ans[i][j] = largestLocalUtil(grid, i, j);
            }
        }
        
        return ans;
    }
}
```
``` C++ []
class Solution {

public:

    int largestLocalUtil(std::vector<std::vector<int>>& grid, int x, int y) {
        int max = 0;
        
        for (int i = x ; i < x+3 ; i++) {
            for (int j = y ; j < y+3 ; j++) {
                max = std::max(max, grid[i][j]);
            }
        }
        
        return max;
    }
    
    vector<vector<int>> largestLocal(vector<vector<int>>& grid) {
        int n = grid.size();
        
        int m = n-2;
        
        std::vector<std::vector<int>> ans(m, std::vector<int>(m, 0));
        
        for (int i = 0 ; i < m ; i++) {
            for (int j = 0 ; j < m ; j++) {
                ans[i][j] = largestLocalUtil(grid, i, j);
            }
        }
        
        return ans;
    }
};
```
``` Python []
class Solution:

    def largestLocalUtil(self, grid, x, y):
        max_val = 0
        
        for i in range(x, x+3):
            for j in range(y, y+3):
                max_val = max(max_val, grid[i][j])
        
        return max_val
    
    def largestLocal(self, grid):
        n = len(grid)
        m = n - 2
        
        ans = [[0] * m for _ in range(m)]
        
        for i in range(m):
            for j in range(m):
                ans[i][j] = self.largestLocalUtil(grid, i, j)
        
        return ans

``` 

**Space Optimized Approach :**
* One can do the space optimization in C++ and Python by modifying the given matrix and resizing to n-2.

**Complexity**
* Space complexity: $$O(1)$$
``` C++ []
class Solution {

public:

    int largestLocalUtil(vector<vector<int>>& grid, int x, int y) {
        int curMax = 0;
        
        for (int i = x-1 ; i <= x+1 ; i++) {
            for (int j = y-1 ; j <= y+1 ; j++) {
                curMax = max(curMax, grid[i][j]);
            }
        }
        
        return curMax;
    }
    
    vector<vector<int>> largestLocal(vector<vector<int>>& grid) {
        int n = grid.size();
        
        for (int i = 1 ; i < n-1 ; i++) {
            for (int j = 1 ; j < n-1 ; j++) {
                grid[i-1][j-1] = largestLocalUtil(grid, i, j);
            }
        }
        
        int m = n-2;
        
        grid.resize(m);
        
        for (int i = 0 ; i < m ; i++) grid[i].resize(m);
        
        return grid;
    }
};
```
``` Python []
class Solution(object):

    def largestLocalUtil(self, grid, x, y):
        cur_max = 0
        
        for i in range(x-1, x+2):
            for j in range(y-1, y+2):
                cur_max = max(cur_max, grid[i][j])
                
        return cur_max
    
    def largestLocal(self, grid):
        n = len(grid)
        
        for i in range(1, n-1):
            for j in range(1, n-1):
                grid[i-1][j-1] = self.largestLocalUtil(grid, i, j)
                
        m = n-2
        
        grid = [row[:m] for row in grid[:m]]
        
        return grid
        
```

![image.png](./images/1.png)

