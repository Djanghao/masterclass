# Fastest (100%) || Easy || Clean & Concise || Space Optimized

**Author:** gameboey
**Votes:** 91
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5145182/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5145182/)

---





# Approach: Sliding Window

   - Loop through each cell of the input grid except for the border cells.

   - For each cell (non - border region), scan the 3x3 subgrid centered around it and find the maximum value. 

   - Store the maximum values in a result grid of size (n - 2) x (m - 2), excluding border cells at indices `(i - 1, j - 1)` which is a shift by 1 to match  the problem's requiremnt that `res[i][j]`should correspond to the largest value of 3x3 matrix in the `gird` matrix centred around row `i + 1` and col `j + 1`. 

   - Return the result grid containing the largest value of each contiguous 3x3 subgrid in the input grid.

This approach efficiently identifies the largest value within each 3x3 subgrid centered around non-border cells in the input grid.



# Complexity
- Time complexity: O(n^2)

- Space complexity: O(n^2)

# Code
```C++ []
#pragma GCC optimize ("Ofast")
#pragma GCC target ("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx")
#pragma GCC optimize ("-ffloat-store")

class Solution {
public:
    vector<vector<int>> largestLocal(vector<vector<int>>& grid) {
        ios_base::sync_with_stdio(0), cin.tie(0), cout.tie(0);
        int n = grid.size();
        vector<vector<int>> res(n - 2, vector<int>(n - 2));

        for(int i = 1; i < n - 1; ++i) {
            for(int j = 1; j < n - 1; ++j) {
                int temp = 0;

                for(int k = i - 1; k <= i + 1; ++k) {
                    for(int l = j - 1; l <= j + 1; ++l) {
                        temp = max(temp, grid[k][l]);
                    }
                }

                res[i - 1][j - 1] = temp;
            }
        }

        return res;
    }
};
```
```java []
class Solution {
    public int[][] largestLocal(int[][] grid) {
        int n = grid.length;
        int[][] res = new int[n - 2][n - 2];

        for(int i = 1; i < n - 1; ++i) {
            for(int j = 1; j < n - 1; ++j) {
                int temp = 0;

                for(int k = i - 1; k <= i + 1; ++k) {
                    for(int l = j - 1; l <= j + 1; ++l) {
                        temp = Math.max(temp, grid[k][l]);
                    }
                }

                res[i - 1][j - 1] = temp;
            }
        }

        return res;
    }
}
```
```python []
class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        n, res = len(grid), []

        for i in range(1, n - 1):
            temp_row = []
            for j in range(1, n - 1):
                temp = 0

                for k in range(i - 1, i + 2):
                    for l in range(j - 1, j + 2):
                        temp = max(temp, grid[k][l])

                temp_row.append(temp)
            res.append(temp_row)

        return res
```
```javascript []
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const n = grid.length;
    const res = [];

    for (let i = 1; i < n - 1; ++i) {
        const tempRow = [];
        for (let j = 1; j < n - 1; ++j) {
            let temp = 0;

            for (let k = i - 1; k <= i + 1; ++k) {
                for (let l = j - 1; l <= j + 1; ++l) {
                    temp = Math.max(temp, grid[k][l]);
                }
            }

            tempRow.push(temp);
        }
        res.push(tempRow);
    }

    return res;
};
```
# Approach: Sliding Window (Space Optimized)

- We optimized the space by not creating a new `n x n` matrix but instead resizing our given input matrix `grid` in-place.

# Complexity
- Time complexity: O(n^2)

- Space complexity: O(1)

# Code
```C++ []
#pragma GCC optimize ("Ofast")
#pragma GCC target ("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx")
#pragma GCC optimize ("-ffloat-store")

class Solution {
public:
    vector<vector<int>> largestLocal(vector<vector<int>>& grid) {
        ios_base::sync_with_stdio(0), cin.tie(0), cout.tie(0);
        int n = grid.size();

        for(int i = 1; i < n - 1; ++i) {
            for(int j = 1; j < n - 1; ++j) {
                int temp = 0;

                for(int k = i - 1; k <= i + 1; ++k) {
                    for(int l = j - 1; l <= j + 1; ++l) {
                        temp = max(temp, grid[k][l]);
                    }
                }

                grid[i - 1][j - 1] = temp;
            }
        }

        grid.resize(n - 2);
        for (int i = 0; i < grid.size(); ++i) {
            grid[i].resize(n - 2);
        }

        return grid;
    }
};
```
```python []
class Solution:
    def largestLocal(self, grid):
        n = len(grid)

        for i in range(1, n - 1):
            for j in range(1, n - 1):
                temp = 0

                for k in range(i - 1, i + 2):
                    for l in range(j - 1, j + 2):
                        temp = max(temp, grid[k][l])

                grid[i - 1][j - 1] = temp

        n = len(grid)
        grid = [row[:n-2] for row in grid[:n-2]]

        return grid
```
**And there you have it, my dear friends! Behold the magnificence of our newly crafted matrix, a testament to the beauty of mathematics! Ah, but let us not forget the thrill of discovery, the dance of numbers in their symphonic glory! Yohoho! Math may not have bones, but it sure does have soul!**

![brook.jpg](./images/0.jpeg)



