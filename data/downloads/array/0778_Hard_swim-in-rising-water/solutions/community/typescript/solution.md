# Binary Search + BFS

**Author:** billrozy
**Votes:** 0
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/6072723/](https://leetcode.com/problems/swim-in-rising-water/solutions/6072723/)

---


# Code
```typescript []
function isValidTime(time: number, grid: number[][]): boolean {
    if (grid[0][0] > time) return false
    const n = grid.length
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    const visited = Array.from(new Array(n), () => new Array(n).fill(false))
    const isValidCell = (row: number, col: number) => {
        return row >= 0 && row < n && col >= 0 && col < n && grid[row][col] <= time &&
                !visited[row][col]
    }
    let queue = [[0, 0]]
    visited[0][0] = true
    while (queue.length > 0) {
        const nextQueue = []
        for (const [row, col] of queue) {
            if (row === n - 1 && col === n - 1) {
                return true
            }
            for (let [drow, dcol] of directions) {
                if (isValidCell(row + drow, col + dcol)) {
                    nextQueue.push([row + drow, col + dcol])
                    visited[row + drow][col + dcol] = true
                }
            }
        }
        queue = nextQueue
    }
    return false
}

function swimInWater(grid: number[][]): number {
    let left = 0
    let right = Math.max(...grid.flat())
    let result = right
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (isValidTime(mid, grid)) {
            result = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return result
};
```