# This shit can not stop my streak | Dynamic programming solution | O(n^2) time complexity, beat 100%

**Author:** TienAnh013
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5161651/](https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5161651/)

---

I started solving this problem around 9am and finally solved it at 10:30pm, today is the best day of my life!

![Screenshot_20240515_233742.png](./images/0.png)


# Main idea
- To go to position [x, y] from [0, 0], we have 4 ways: go through [x-1, y], [x+1, y], [x, y-1] or [x, y+1], "the maximum safeness factor" of the path from [0, 0] to [x, y] can be calculated based on those four: ```pathScore[x][y] = min(safetyScore[x][y], max(pathScore[x-1][y], pathScore[x+1][y], pathScore[x][y-1], pathScore[x][y+1]))``` //``` pathScore[x][y]``` is "the maximum safeness factor" of the path from [0, 0] to [x, y], ```safetyScore[x][y]``` is "the smallest Manhattan distance from [x, y] to the nearest grid that contains thieves".
- Using the above idea and doing BFS from [0, 0], we have ```pathScore```as the 2D array that contains "the maximum safeness factor" from [0, 0] to each position, so the answer is ```pathScore[n - 1][n - 1]```.

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` typescript []
function maximumSafenessFactor(grid: number[][]): number {
    const n = grid.length;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return 0;

    // <----------find safetyScore of each position---------->
    const safetyScore: number[][] = [];
    for (let i = 0; i < n; i++) {
        safetyScore.push(new Array(n).fill(0));
    }
    const stack: number[][][] = [[]];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                stack[0].push([i, j]);
            }
        }
    }

    for (let i = 0; i < stack.length; i++) {
        let arr: number[][] = [];
        for (let j = 0; j < stack[i].length; j++) {
            let x = stack[i][j][0],
                y = stack[i][j][1];
            if (x - 1 >= 0 && grid[x - 1][y] === 0) {
                if (safetyScore[x - 1][y] === 0 || safetyScore[x - 1][y] > safetyScore[x][y] + 1) {
                    safetyScore[x - 1][y] = safetyScore[x][y] + 1;
                    arr.push([x - 1, y]);
                }
            }
            if (y - 1 >= 0 && grid[x][y - 1] === 0) {
                if (safetyScore[x][y - 1] === 0 || safetyScore[x][y - 1] > safetyScore[x][y] + 1) {
                    safetyScore[x][y - 1] = safetyScore[x][y] + 1;
                    arr.push([x, y - 1]);
                }
            }
            if (x + 1 < n && grid[x + 1][y] === 0) {
                if (safetyScore[x + 1][y] === 0 || safetyScore[x + 1][y] > safetyScore[x][y] + 1) {
                    safetyScore[x + 1][y] = safetyScore[x][y] + 1;
                    arr.push([x + 1, y]);
                }
            }
            if (y + 1 < n && grid[x][y + 1] === 0) {
                if (safetyScore[x][y + 1] === 0 || safetyScore[x][y + 1] > safetyScore[x][y] + 1) {
                    safetyScore[x][y + 1] = safetyScore[x][y] + 1;
                    arr.push([x, y + 1]);
                }
            }
        }
        if (arr.length !== 0) stack.push(arr);
    }

    // <----------find the maximum safeness factor of the path from [0, 0] to each position (find the pathScore array)---------->
    const pathStack: number[][][] = [[[0, 0]]];
    const pathScore: number[][] = [];
    for (let i = 0; i < n; i++) pathScore.push(new Array(n).fill(-1));
    pathScore[0][0] = safetyScore[0][0];

    for (let i = 0; i < pathStack.length; i++) {
        const arr: number[][] = [];
        for (let j = 0; j < pathStack[i].length; j++) {
            let x = pathStack[i][j][0],
                y = pathStack[i][j][1];

            if (x - 1 >= 0) {
                let score = pathScore[x][y];
                if (x - 2 >= 0) score = Math.max(pathScore[x - 2][y], score);
                if (y - 1 >= 0) score = Math.max(pathScore[x - 1][y - 1], score);
                if (y + 1 < n) score = Math.max(pathScore[x - 1][y + 1], score);
                if (pathScore[x - 1][y] === -1 || pathScore[x - 1][y] < Math.min(score, safetyScore[x - 1][y])) {
                    pathScore[x - 1][y] = Math.min(score, safetyScore[x - 1][y]);
                    arr.push([x - 1, y]);
                }
            }
            if (y - 1 >= 0) {
                let score = pathScore[x][y];
                if (y - 2 >= 0) score = Math.max(pathScore[x][y - 2], score);
                if (x - 1 >= 0) score = Math.max(pathScore[x - 1][y - 1], score);
                if (x + 1 < n) score = Math.max(pathScore[x + 1][y - 1], score);
                if (pathScore[x][y - 1] === -1 || pathScore[x][y - 1] < Math.min(score, safetyScore[x][y - 1])) {
                    pathScore[x][y - 1] = Math.min(score, safetyScore[x][y - 1]);
                    arr.push([x, y - 1]);
                }
            }
            if (x + 1 < n) {
                let score = pathScore[x][y];
                if (x + 2 < n) score = Math.max(score, pathScore[x + 2][y]);
                if (y - 1 >= 0) score = Math.max(score, pathScore[x + 1][y - 1]);
                if (y + 1 < n) score = Math.max(score, pathScore[x + 1][y + 1]);
                if (pathScore[x + 1][y] === -1 || pathScore[x + 1][y] < Math.min(score, safetyScore[x + 1][y])) {
                    pathScore[x + 1][y] = Math.min(score, safetyScore[x + 1][y]);
                    arr.push([x + 1, y]);
                }
            }
            if (y + 1 < n) {
                let score = pathScore[x][y];
                if (y + 2 < n) score = Math.max(score, pathScore[x][y + 2]);
                if (x - 1 >= 0) score = Math.max(score, pathScore[x - 1][y + 1]);
                if (x + 1 < n) score = Math.max(score, pathScore[x + 1][y + 1]);
                if (pathScore[x][y + 1] === -1 || pathScore[x][y + 1] < Math.min(score, safetyScore[x][y + 1])) {
                    pathScore[x][y + 1] = Math.min(score, safetyScore[x][y + 1]);
                    arr.push([x, y + 1]);
                }
            }
        }
        if (arr.length > 0) pathStack.push(arr);
    }

    return pathScore[n - 1][n - 1];
}
```