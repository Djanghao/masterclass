# TypeScript solution | DFS ✅

**Author:** shuhrat-kobulov
**Votes:** 3
**Link:** [https://leetcode.com/problems/flood-fill/solutions/3271796/](https://leetcode.com/problems/flood-fill/solutions/3271796/)

---

# Complexity
- Time complexity: O(n) === O(rows * cols)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    // Store the number of rows and columns in the image array
    const ROWS: number = image.length;
    const COLS: number = image[0].length;

    // Store the color of the starting pixel
    const startColor: number = image[sr][sc];

    // If the starting color is already the new color, return the original image
    if(startColor === color) {
        return image;
    }

    // DFS (Depth First Search) algorithm
    function dfs(row: number, col: number): void {
        if (row < 0 || col < 0 || row >= ROWS || col >= COLS || image[row][col] !== startColor) {
            return;
        }

        // Change the color of the current pixel to the new color
        image[row][col] = color;

        // Recursively call dfs on the neighboring pixels
        dfs(row - 1, col); // up
        dfs(row + 1, col); // down
        dfs(row, col - 1); // left
        dfs(row, col + 1); // right
    }

    // Call dfs on the starting pixel
    dfs(sr, sc);

    return image;
};
```