# Runtime beats 100.00%, Memory beats 85.71% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/strange-printer-ii/solutions/5854325/](https://leetcode.com/problems/strange-printer-ii/solutions/5854325/)

---

# Intuition
The problem involves determining if we can print a grid of colors using a printer that can only print solid rectangles of one color at a time. Each color can only be used once, so we need to check if the areas occupied by each color form valid rectangles without overlaps.

# Approach
We calculate the bounding boxes for each color, check if we can print each color's area without interference from other colors, and repeat this until no colors remain to be printed.

# Complexity
- Time complexity:
O(m x n) since we scan the grid multiple times, where m is the number of rows and n is the number of columns.

- Space complexity:
O(k) for the map that tracks the bounding boxes of up to k colors, where k is at most 60 (the maximum color value).

# Code
```typescript []
/**
 * Checks if it's possible to print the target grid using the rules provided.
 * @param targetGrid - A 2D array representing the colors in the grid.
 * @return A boolean indicating if the grid can be printed according to the rules.
 */
function isPrintable(targetGrid: number[][]): boolean {
    const n = targetGrid.length; // Number of rows
    const m = targetGrid[0].length; // Number of columns
    let map: { [key: number]: { top: number; left: number; down: number; right: number } } = {};

    // Determine the bounding box for each color in the grid
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const color = targetGrid[i][j];
            if (!(color in map)) {
                map[color] = {
                    top: i,
                    left: j,
                    down: i,
                    right: j,
                };
            } else {
                map[color].top = Math.min(map[color].top, i);
                map[color].left = Math.min(map[color].left, j);
                map[color].down = Math.max(map[color].down, i);
                map[color].right = Math.max(map[color].right, j);
            }
        }
    }

    // Continuously try to print colors until no more can be printed
    while (Object.keys(map).length > 0) {
        const next: { [key: number]: { top: number; left: number; down: number; right: number } } = {};
        for (const color in map) {
            // Check if the current color can be printed
            if (!canPrint(map[color], color, targetGrid)) {
                next[color] = map[color]; // If not, keep it for the next iteration
            }
        }
        // If no color could be printed this round, we cannot print the grid
        if (Object.keys(next).length === Object.keys(map).length) {
            return false;
        }
        map = next; // Update map for the next iteration
    }
    return true; // All colors were successfully printed
}

/**
 * Checks if a specific color can be printed based on its bounding box.
 * @param position - The bounding box of the color in the grid.
 * @param color - The color to print.
 * @param targetGrid - The original target grid.
 * @return A boolean indicating if the color can be printed.
 */
function canPrint(position: { top: number; left: number; down: number; right: number }, color: string, targetGrid: number[][]): boolean {
    const { top, left, down, right } = position;

    // Check if the bounding box can be filled with the color
    for (let i = top; i <= down; i++) {
        for (let j = left; j <= right; j++) {
            if (targetGrid[i][j] > 0 && targetGrid[i][j] !== Number(color)) {
                return false; // Found a different color in the bounding box
            }
        }
    }

    // Set the cells in the bounding box to 0 (indicating they've been printed)
    for (let i = top; i <= down; i++) {
        for (let j = left; j <= right; j++) {
            targetGrid[i][j] = 0;
        }
    }
    return true; // Successfully printed the color
}

```