# 💥Memory beats 100%, Runtime beats 80% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/5696301/](https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/5696301/)

---

# Intuition
To find the best location to build a house that minimizes the total distance to all buildings, use BFS from each building to calculate the distance to every empty land. Track the cumulative distance and number of buildings reached from each empty land. The optimal location is where the total distance to all buildings is minimized. If no empty land can reach all buildings, return -1.

# Approach
This approach ensures efficient computation and manages both time and space complexity within acceptable limits for the problem constraints.

# Complexity
- Time complexity:
O(B\u22C5m\u22C5n)

- Space complexity:
O(m\u22C5n)

# Code
```typescript []
function shortestDistance(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    // Initialize distance and reach arrays
    const dist = Array.from({ length: m }, () => Array(n).fill(0));
    const reach = Array.from({ length: m }, () => Array(n).fill(0));
    let buildingCount = 0;

    // Perform BFS from each building
    function bfs(startRow: number, startCol: number) {
        const queue: [number, number, number][] = [[startRow, startCol, 0]];
        const visited = Array.from({ length: m }, () => Array(n).fill(false));
        visited[startRow][startCol] = true;

        while (queue.length > 0) {
            const [row, col, distance] = queue.shift()!;
            for (const [dRow, dCol] of directions) {
                const newRow = row + dRow;
                const newCol = col + dCol;
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n &&
                    !visited[newRow][newCol] && grid[newRow][newCol] === 0) {
                    visited[newRow][newCol] = true;
                    dist[newRow][newCol] += distance + 1;
                    reach[newRow][newCol]++;
                    queue.push([newRow, newCol, distance + 1]);
                }
            }
        }
    }

    // Find all buildings and perform BFS from each
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 1) {
                buildingCount++;
                bfs(row, col);
            }
        }
    }

    // Find the minimum distance
    let minDist = Infinity;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 0 && reach[row][col] === buildingCount) {
                minDist = Math.min(minDist, dist[row][col]);
            }
        }
    }

    return minDist === Infinity ? -1 : minDist;
}

```