# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/5929722/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/5929722/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
public int[] findColumnWidth(int[][] grid) {
    int m = grid.length;    // Number of rows
    int n = grid[0].length; // Number of columns
    int[] ans = new int[n]; // To store the width of each column

    // Iterate through each column
    for (int col = 0; col < n; col++) {
        int maxWidth = 0; // To store the maximum width of the current column

        // Iterate through each row of the current column
        for (int row = 0; row < m; row++) {
            // Convert the integer to a string to find its length
            int len = String.valueOf(grid[row][col]).length();
            maxWidth = Math.max(maxWidth, len); // Update the max width for this column
        }

        ans[col] = maxWidth; // Store the max width for the current column
    }

    return ans; // Return the widths of all columns
}
```
```javascript []
var findColumnWidth = function(grid) {
    const m = grid.length;    // Number of rows
    const n = grid[0].length; // Number of columns
    const ans = new Array(n).fill(0); // To store the width of each column

    // Iterate through each column
    for (let col = 0; col < n; col++) {
        let maxWidth = 0;

        // Iterate through each row in the current column
        for (let row = 0; row < m; row++) {
            // Get the length of the current number as a string
            const len = String(grid[row][col]).length;
            maxWidth = Math.max(maxWidth, len); // Update the maximum width for this column
        }

        ans[col] = maxWidth; // Store the maximum width for the current column
    }

    return ans; // Return the result as an array
};
```
```typescript []
function findColumnWidth(grid: number[][]): number[] {
    const m: number = grid.length;    // Number of rows
    const n: number = grid[0].length; // Number of columns
    const ans: number[] = new Array(n).fill(0); // To store the width of each column

    // Iterate through each column
    for (let col = 0; col < n; col++) {
        let maxWidth = 0;

        // Iterate through each row in the current column
        for (let row = 0; row < m; row++) {
            // Get the length of the current number as a string
            const len: number = String(grid[row][col]).length;
            maxWidth = Math.max(maxWidth, len); // Update the maximum width for this column
        }

        ans[col] = maxWidth; // Store the maximum width for the current column
    }

    return ans; // Return the result as an array
};
```