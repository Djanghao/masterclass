# Primitive solution

**Author:** Samilcd26
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-closed-islands/solutions/6114358/](https://leetcode.com/problems/number-of-closed-islands/solutions/6114358/)

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
```typescript []
function closedIsland(grid: number[][]): number {
    let islandCount = 0;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (grid[x][y] === 0 && isIsland(grid, x, y)) {
                islandCount += 1;
            }
        }
    }
    return islandCount;
}

function isIsland(grid: number[][], x: number, y: number): boolean {
    if (x <= 0 || x >= grid.length - 1 || y <= 0 || y >= grid[x].length - 1) {
        return false;
    }
    grid[x][y] = 1;
    let isClosed = true;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (grid[nx][ny] === 0) {
            isClosed = isIsland(grid, nx, ny) && isClosed;
        }
    }
    return isClosed;
}
```