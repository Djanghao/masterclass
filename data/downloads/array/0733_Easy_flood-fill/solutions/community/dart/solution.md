# Flood Fill Algorithm using Depth-First Search (DFS)

**Author:** tinhhuynh
**Votes:** 1
**Link:** [https://leetcode.com/problems/flood-fill/solutions/3793355/](https://leetcode.com/problems/flood-fill/solutions/3793355/)

---

# Intuition
The flood-fill problem can be effectively solved using a Depth-First Search (DFS) approach. We start from the given (sr, sc) coordinates in the 2D grid and explore neighboring cells to fill contiguous regions with the specified color. The goal is to change the color of the connected region that has the same color as the starting cell to the target color.

# Approach
1. We begin by storing the value of the starting cell in the variable `value`.
2. To avoid unnecessary work, we first check if the `value` is already equal to the target `color`. If so, there's no need to perform the flood-fill, and we can immediately return the original `image`.
3. Next, we set the color of the starting cell to the target `color` as the initial step of the flood-fill operation.
4. We recursively explore the neighboring cells (up, down, left, and right) of the starting cell.
5. During the exploration, if a neighboring cell has the same `value` as the starting cell, we apply the flood-fill operation on that cell too. This process continues recursively until the entire connected region with the same `value` is filled with the target `color`.
6. Once the flood-fill is complete, we return the updated `image`.

# Complexity
- Time complexity:
The function visits each cell at most once and explores its neighboring cells. In the worst case, the algorithm may visit all cells in the grid. Therefore, the time complexity is O(m * n), where `m` is the number of rows and `n` is the number of columns in the grid.

- Space complexity:
The space complexity is determined by the recursion stack used in the recursive calls. In the worst case, the recursion depth could be equal to the number of cells with the `same` value as the starting cell. Therefore, the space complexity is O(m * n) due to the maximum recursion depth.

# Code
```
class Solution {
  List<List<int>> floodFill(List<List<int>> image, int sr, int sc, int color) {
    final int value = image[sr][sc];
    if (value == color) return image;
    image[sr][sc] = color;
    if (sr != 0 && image[sr - 1][sc] == value) {
      floodFill(image, sr - 1, sc, color);
    }
    if (sc != 0 && image[sr][sc - 1] == value) {
      floodFill(image, sr, sc - 1, color);
    }
    if (sr != image.length - 1 && image[sr + 1][sc] == value) {
      floodFill(image, sr + 1, sc, color);
    }
    if (sc != image[0].length - 1 && image[sr][sc + 1] == value) {
      floodFill(image, sr, sc + 1, color);
    }
    return image;
  }

}
```