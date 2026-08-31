# FULL EXPLANATION WITH DRY RUN ✅✅✅ || EASY SOLUTION 🔥🔥🔥|| ISLAND PERIMETER

**Author:** ankitsingh07s
**Votes:** 40
**Link:** [https://leetcode.com/problems/island-perimeter/solutions/5038982/](https://leetcode.com/problems/island-perimeter/solutions/5038982/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
* In this problem, you're given a 2D grid representing land and water, where 1s represent land (an island) and 0s represent water. You're tasked with finding the perimeter of the island formed by these land cells, where the perimeter is the total length of the boundary around the island.
# Approach
<!-- Describe your approach to solving the problem. -->
* Imagine you have a grid representing a piece of land with some parts filled with water and others with land. The task is to find the perimeter of the land in this grid.

* Starting Point:
  * Begin at the top-left corner of the grid.
  * Look at each cell one by one.
  * Checking Each Cell:
     * For each cell that contains land:
     * Check if any of its neighboring cells are water or if the cell is at the edge of the grid.
     * If a neighbor is water or the cell is at the grid edge, add to the perimeter count.
  * Moving to Next Cell:
     * Move to the cell on the right.
     * Repeat the process for each cell in the row.
     * Once a row is complete, move to the next row and repeat until all cells are checked.
  * Calculating Perimeter:
    * Sum up all the counts from step 2 for each land cell.
    - The total count represents the perimeter of the land in the grid.

# Example:
# Let's Dry Run the code - 
  * Imagine a grid where "1" represents land and "0" represents water:
```
[
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
]

```




1) Start at [0][0] (top-left corner):
    * This cell is water (0), so no contribution to the perimeter.
Move to [0][1].
2) [0][1]:
    * This cell is land (1), check neighbors:
    * Left neighbor is water, increase perimeter count by 1.
    * Move to [0][2].
3) [0][2]:
    * This cell is water (0), no contribution.
    * Move to [0][3].
3) [0][3]:
    * This cell is water (0), no contribution.
    * Move to [1][0].
4) [1][0]:
    * This cell is land (1), check neighbors:
    * Top neighbor is water, increase perimeter count by 1.
    * Left neighbor is water, increase perimeter count by 1.
    * Right neighbor is land, no contribution.
    * Bottom neighbor is water, increase perimeter count by 1.
    * Since this cell is also at the grid's edge, increase perimeter count by 1.
    * Move to [1][1].
5) [1][1]:
    * This cell is land (1), check neighbors:
    * Top neighbor is land, no contribution.
    * Left neighbor is land, no contribution.
    * Right neighbor is land, no contribution.
    * Bottom neighbor is water, increase perimeter count by 1.
    * Move to [1][2].
6) [1][2]:
    * This cell is land (1), check neighbors:
    * Top neighbor is water, increase perimeter count by 1.
    * Left neighbor is land, no contribution.
    * Right neighbor is water, increase perimeter count by 1.
    * Move to [1][3].
7) [1][3]:
    * This cell is water (0), no contribution.
    * Move to [2][0].
8) [2][0]:
    * This cell is water (0), no contribution.
    * Move to [2][1].
9) [2][1]:
    * This cell is land (1), check neighbors:
    * Top neighbor is land, no contribution.
    * Left neighbor is water, increase perimeter count by 1.
    * Right neighbor is land, no contribution.
    * Bottom neighbor is water, increase perimeter count by 1.
    * Since this cell is also at the grid's edge, increase perimeter count by 1.
    * Move to [2][2].
10) [2][2]:
    * This cell is water (0), no contribution.
    * Move to [2][3].
11) [2][3]:
    * This cell is water (0), no contribution.
    * Move to [3][0].
12) [3][0]:
    * This cell is land (1), check neighbors:
    * Top neighbor is water, increase perimeter count by 1.
    * Left neighbor is water, increase perimeter count by 1.
    * Right neighbor is water, increase perimeter count by 1.
    * Move to [3][1].
13) [3][1]:
    * This cell is land (1), check neighbors:
    * Top neighbor is land, no contribution.
    * Left neighbor is land, no contribution.
    * Right neighbor is water, increase perimeter count by 1.
    * Bottom neighbor is water, increase perimeter count by 1.
    * Since this cell is also at the grid's edge, increase perimeter count by 1.
    * Move to [3][2].
14) [3][2]:
    * This cell is water (0), no contribution.
    * Move to [3][3].
15) [3][3]:
    * This cell is water (0), no contribution.
    * End of the grid traversal.
    * After completing the traversal and counting, the final perimeter count for this example grid is 16.
# Complexity
- Time complexity: O(n * m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n * m) -> for the grid
  * otherwise, S.C. will be O(1).
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c++ []
class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        // you have to traverse each block and check if its neighbour is 1 or 0.
        // suppose at grid[i][j] = 1, we will have to check all 4 of its
        // neighbours , if a neighbour has 0, we increment the perimeter
        // counter, if neighbour has 1, we dont do anything.

        int n = grid.size();
        int m = grid[0].size();
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 1) {
                    if ((j > 0 && grid[i][j - 1] == 0) || j == 0)
                        cnt++;

                    if ((i > 0 && grid[i - 1][j] == 0) || i == 0)
                        cnt++;

                    if ((j < m - 1 && grid[i][j + 1] == 0) || j == m - 1)
                        cnt++;

                    if ((i < n - 1 && grid[i + 1][j] == 0) || i == n - 1)
                        cnt++;
                }
            }
        }
        return cnt;
    }
};
```
```javascript []
var islandPerimeter = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                if ((j > 0 && grid[i][j - 1] === 0) || j === 0)
                    cnt++;

                if ((i > 0 && grid[i - 1][j] === 0) || i === 0)
                    cnt++;

                if ((j < m - 1 && grid[i][j + 1] === 0) || j === m - 1)
                    cnt++;

                if ((i < n - 1 && grid[i + 1][j] === 0) || i === n - 1)
                    cnt++;
            }
        }
    }
    return cnt;
};

```

```java []
public class Solution {
    public int islandPerimeter(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 1) {
                    if ((j > 0 && grid[i][j - 1] == 0) || j == 0)
                        cnt++;

                    if ((i > 0 && grid[i - 1][j] == 0) || i == 0)
                        cnt++;

                    if ((j < m - 1 && grid[i][j + 1] == 0) || j == m - 1)
                        cnt++;

                    if ((i < n - 1 && grid[i + 1][j] == 0) || i == n - 1)
                        cnt++;
                }
            }
        }
        return cnt;
    }
}

```
```python []
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        n = len(grid)
        m = len(grid[0])
        cnt = 0
        for i in range(n):
            for j in range(m):
                if grid[i][j] == 1:
                    if (j > 0 and grid[i][j - 1] == 0) or j == 0:
                        cnt += 1

                    if (i > 0 and grid[i - 1][j] == 0) or i == 0:
                        cnt += 1

                    if (j < m - 1 and grid[i][j + 1] == 0) or j == m - 1:
                        cnt += 1

                    if (i < n - 1 and grid[i + 1][j] == 0) or i == n - 1:
                        cnt += 1
        return cnt

```
```c# []
public class Solution {
    public int IslandPerimeter(int[][] grid) {
        int n = grid.Length;
        int m = grid[0].Length;
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 1) {
                    if ((j > 0 && grid[i][j - 1] == 0) || j == 0)
                        cnt++;

                    if ((i > 0 && grid[i - 1][j] == 0) || i == 0)
                        cnt++;

                    if ((j < m - 1 && grid[i][j + 1] == 0) || j == m - 1)
                        cnt++;

                    if ((i < n - 1 && grid[i + 1][j] == 0) || i == n - 1)
                        cnt++;
                }
            }
        }
        return cnt;
    }
}

```

![OIP.jpeg](./images/0.jpeg)
