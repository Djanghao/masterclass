# Easy solution with explanation - 27/04/2024 contest

**Author:** MangeurDeSushi
**Votes:** 30
**Link:** [https://leetcode.com/problems/right-triangles/solutions/5080160/](https://leetcode.com/problems/right-triangles/solutions/5080160/)

---

# Intuition

First we counts the number of ones in each row and column. We then iterates over each cell and calculates the number of right triangles that can be formed with that cell as the right-angle vertex. We just sums up those triangles to get the res. (to recap we just know we can do a triangle with a cell at coord x, y if there is a 1 in the same column and a 1 in the same row)

# Iteration through example

1 1 0 0
0 1 0 1
1 0 0 0

Initialization:

rows = 3, cols = 4
row_counts = [0, 0, 0], col_counts = [0, 0, 0, 0]

Counting Ones:

Iterating through the array:
Ones are at (0, 0), (0, 1), (1, 1), (1, 3), (2, 0).
row_counts = [2, 2, 1], col_counts = [2, 2, 0, 1]

(0, 0): (row_counts[0] - 1) * (col_counts[0] - 1) = 1 * 1 = 1
(0, 1): (row_counts[0] - 1) * (col_counts[1] - 1) = 1 * 1 = 1
(1, 1): (row_counts[1] - 1) * (col_counts[1] - 1) = 1 * 1 = 1
(1, 3): (row_counts[1] - 1) * (col_counts[3] - 1) = 1 * 0 = 0
(2, 0): (row_counts[2] - 1) * (col_counts[0] - 1) = 0 * 1 = 0
Summing up these counts: 1 + 1 + 1 + 0 + 0 = 3

don't hesitate to upvote if you like the solution

```python []
class Solution:
    def numberOfRightTriangles(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        row_counts = [0] * rows
        col_counts = [0] * cols
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:
                    row_counts[r] += 1
                    col_counts[c] += 1
        triangles = 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:
                    triangles += (row_counts[r] - 1) * (col_counts[c] - 1)

        return triangles
```
```cpp []
#include <vector>

class Solution {
public:
    int numberOfRightTriangles(std::vector<std::vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        std::vector<int> row_counts(rows, 0);
        std::vector<int> col_counts(cols, 0);
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < cols; ++c) {
                if (grid[r][c] == 1) {
                    row_counts[r]++;
                    col_counts[c]++;
                }
            }
        }
        int triangles = 0;
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < cols; ++c) {
                if (grid[r][c] == 1) {
                    triangles += (row_counts[r] - 1) * (col_counts[c] - 1);
                }
            }
        }
        return triangles;
    }
};

```
``` java []
class Solution {
    public int numberOfRightTriangles(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        int[] rowCounts = new int[rows];
        int[] colCounts = new int[cols];
        Arrays.fill(rowCounts, 0);
        Arrays.fill(colCounts, 0);
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < cols; ++c) {
                if (grid[r][c] == 1) {
                    rowCounts[r]++;
                    colCounts[c]++;
                }
            }
        }
        int triangles = 0;
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < cols; ++c) {
                if (grid[r][c] == 1) {
                    triangles += (rowCounts[r] - 1) * (colCounts[c] - 1);
                }
            }
        }
        return triangles;
    }
}
```