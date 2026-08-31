# 🔥 Beats 100% Runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-meeting-point/solutions/5686540/](https://leetcode.com/problems/best-meeting-point/solutions/5686540/)

---

# Intuition
The minimal total travel distance for friends located in a grid (using Manhattan Distance) is achieved when they meet at the median of their respective coordinates. The median minimizes the sum of absolute distances, making it the optimal meeting point.

# Approach
Collect Coordinates: Traverse the grid to gather row and column indices where friends (1s) are located.

Find the Median: Calculate the median of the row and column indices.

Calculate Distance: Sum the distances from all points to the median in both dimensions.

# Complexity
- Time complexity:

  O(m * n): To collect all the row and column indices by iterating over the grid.

   O(m + n): To determine the median and compute the total distance.

- Space complexity:
O(m + n): To store the row and column indices where friends are located.

# Code
```typescript []
function minTotalDistance(grid: number[][]): number {
    const rows: number[] = [];
    const cols: number[] = [];

    // Collect all row and column indices where grid[i][j] == 1
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                rows.push(i);
            }
        }
    }

    for (let j = 0; j < grid[0].length; j++) {
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][j] === 1) {
                cols.push(j);
            }
        }
    }

    // The best meeting point is at the median of rows and cols
    const medianRow = rows[Math.floor(rows.length / 2)];
    const medianCol = cols[Math.floor(cols.length / 2)];

    // Calculate total distance
    let distance = 0;
    for (const row of rows) {
        distance += Math.abs(row - medianRow);
    }
    for (const col of cols) {
        distance += Math.abs(col - medianCol);
    }

    return distance;
}

```