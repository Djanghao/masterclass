# Typescript DFS + Binary Search

**Author:** alexgavrilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-with-minimum-effort/solutions/4052891/](https://leetcode.com/problems/path-with-minimum-effort/solutions/4052891/)

---

# Complexity\r
- Time complexity:\r
O(m * n)\r
\r
- Space complexity:\r
O(m * n)\r
\r
# Code\r
```\r
// Backtracking. TC: O(3^m*n). SC: O(m * n) - TLE\r
function minimumEffortPathBacktracking(heights: number[][]): number {\r
    const n: number = heights.length;\r
    const m: number = heights[0].length;\r
    let maxSoFar: number = Number.MAX_SAFE_INTEGER;\r
\r
    const directions: [number, number][] = [\r
        [0, 1], // bottom\r
        [-1, 0], // left\r
        [0, -1], // up\r
        [1, 0], // right\r
    ];\r
\r
    const isValidCell = (x: number, y: number): boolean => {\r
        return x >= 0 && x < n && y >= 0 && y < m && heights[x][y] != 0;\r
    }\r
\r
    const dfs = (x: number, y: number, maxDiff: number = 0): number => {\r
        if (x == n - 1 && y == m - 1) {\r
            maxSoFar = Math.min(maxSoFar, maxDiff);\r
            return maxDiff;\r
        }\r
        const currentHeight = heights[x][y];\r
        heights[x][y] = 0;\r
        let minEffort = Number.MAX_SAFE_INTEGER;\r
        for (const [shiftX, shiftY] of directions) {\r
            const nextX: number = x + shiftX;\r
            const nextY: number = y + shiftY;\r
\r
            if (! isValidCell(nextX, nextY)) continue;\r
\r
            const currentDiff: number = Math.abs(heights[nextX][nextY] - currentHeight);\r
            const maxCurrentDiff: number = Math.max(maxDiff, currentDiff);\r
            if (maxCurrentDiff < maxSoFar) {\r
                minEffort = Math.min(minEffort, dfs(nextX, nextY, maxCurrentDiff));\r
            }\r
        }\r
\r
        heights[x][y] = currentHeight;\r
        return minEffort;\r
    }\r
\r
    return dfs(0, 0);\r
};\r
\r
class DSU \r
{\r
    root: number[];\r
    rank: number[];\r
\r
    constructor(size: number) {\r
        this.root = [...new Array(size).keys()];\r
        this.rank = new Array(size).fill(0);\r
    }\r
\r
    find = (x: number): number => {\r
        if (this.root[x] != x) {\r
            this.root[x] = this.find(this.root[x]);\r
        }\r
\r
        return this.root[x];\r
    }\r
\r
    union = (x: number, y: number): void => {\r
        const rootX = this.find(x);\r
        const rootY = this.find(y);\r
\r
        if (rootX != rootY) {\r
            if (this.rank[rootX] < this.rank[rootY]) {\r
                this.root[rootX] = rootY;\r
            } else if (this.rank[rootX] > this.rank[rootY]) {\r
                this.root[rootY] = rootX;\r
            } else {\r
                this.root[rootY] = rootX;\r
                this.rank[rootX] += 1;\r
            }\r
        }\r
    }\r
\r
    connected = (x: number, y: number): boolean => {\r
        return this.find(x) == this.find(y);\r
    }\r
}\r
\r
// TC: O(m * n (log(m*n))), SC: O(m * n)\r
function minimumEffortPathDSU(heights: number[][]): number {\r
    const n: number = heights.length;\r
    const m: number = heights[0].length;\r
\r
    if (n == 1 && m == 1) return 0;\r
\r
    const edgeList: [number, number, number][] = [];\r
    for (let i = 0; i < n; i++) {\r
        for (let j = 0; j < m; j++) {\r
            if (i + 1 < n) {\r
                edgeList.push([\r
                    Math.abs(heights[i][j] - heights[i + 1][j]),\r
                    i * m + j,\r
                    (i + 1) * m + j\r
                ]);\r
            }\r
            if (j + 1 < m) {\r
                edgeList.push([\r
                    Math.abs(heights[i][j] - heights[i][j + 1]),\r
                    i * m + j,\r
                    i * m + j + 1\r
                ]);\r
            }\r
        }\r
    }\r
\r
    edgeList.sort((a, b) => a[0] - b[0]);\r
\r
    const dsu = new DSU(n * m);\r
    for (const [diff, x, y] of edgeList) {\r
        dsu.union(x, y);\r
        \r
        // move on if the start point and the destination still not connexted\r
        if (dsu.find(0) != dsu.find(n * m - 1)) {\r
            continue;\r
        }\r
\r
        return diff;\r
    }\r
\r
    return -1;\r
}\r
\r
// DFS + Binary search approach (best option): TC: O(m * n), SC: O(m * n)\r
// The same could be implemented with BFS without stack space and in theory can works faster \r
// (but with the same TC + SC)\r
function minimumEffortPath(heights: number[][]): number {\r
    const n: number = heights.length;\r
    const m: number = heights[0].length;\r
\r
    const directions: [number, number][] = [\r
        [1, 0], // right\r
        [0, 1],  // bottom\r
        [-1, 0], // left\r
        [0, -1], // top\r
    ];\r
\r
    const isValidCell = (x: number, y: number): boolean => {\r
        return x >= 0 && x < n && y >= 0 && y < m;\r
    }\r
\r
    const canReachDestination = (x: number, y: number, mid: number, visited = new Set()): boolean => {\r
        if (x == n - 1 && y == m - 1) return true;\r
        visited.add(`${x}-${y}`);\r
\r
        for (const [dx, dy] of directions) {\r
            const nextX: number = x + dx;\r
            const nextY: number = y + dy;\r
            if (! isValidCell(nextX, nextY) || visited.has(`${nextX}-${nextY}`)) {\r
                continue;\r
            }\r
\r
            const currentDiff: number = Math.abs(heights[nextX][nextY] - heights[x][y]);\r
            if (currentDiff <= mid && canReachDestination(nextX, nextY, mid, visited)) {\r
                return true;\r
            }\r
        }\r
\r
        return false;\r
    }\r
\r
    let left: number = 0;\r
    let right: number = Math.pow(10, 6);\r
    while (left < right) {\r
        // We want to check if the path exist with an effort <= mid\r
        const mid: number = Math.floor((left + right) / 2);\r
        const visited: Set<string> = new Set();\r
        // each time we start from start point [0][0] and trying to reach the point [n - 1][m - 1]\r
        if (canReachDestination(0, 0, mid, visited)) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
```