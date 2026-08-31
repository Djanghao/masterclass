# Solution with Backtracking on Python3 / TypeScript

**Author:** subscriber6436
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/4151615/](https://leetcode.com/problems/unique-paths-iii/solutions/4151615/)

---

# Intuition
Here's the brief explanation of the problem:
- there's a `grid`
- the cells of this grid has it's own notation (`-1` for obstacle, `0` for free cell, `1` is robot **starting** point, `2` is **ending** point)
- the goal is to find **HOW many** distinct ways are exist to visit **all cells** from **start to end**

There're some ways to get all possible combinations of visited cells.
One of them is **Backtracking approach**.

Consider this example:
```
grid = [
    [1,0,0], 
    [0,0,2]
]

# The robot can move in four directions.
# How many distinct ways are exist to visit all cells from 1 to 2?
# (0, 0) => (1, 0) => (1, 1) => (0, 1) => (0, 2) => (1, 2)

# This path is THE ONLY VALID one. 
# There're no suitable paths for the condition above.
```

# Approach
1. define `seen` set to store a current path
2. define `l` as the count of **cells** in grid
3. define `isValid` function to check if the robot still inside a grid
4. define `bt` function, that accepts `row` and `col` as a current cell
5. check if `seen` has all of the possible `0` cells, and return `1`, since this path is a **valid one**
6. let the robot move in four directions from `dirs`
7. check if the robot inside of a grid and that it isn't trying to visit a cell, **that was visited before**
8. add this cell `(x, y)` to the `seen` and continue **backtracking**
9. return `result` as a count of possible ways from a particular `(x, y)`
10. define `start` as a starting point and after iterating over grid, find this point
11. don't forget to **decrement count of obstacles from valid cells** as `l -= 1`
12. return `bt(start[0], start[1])`

# Complexity
- Time complexity: **O(4^(n*m)**, since we're going to visit all of the cells in grid **in four directions**

- Space complexity: **O(n*m)**, to store `(row, col)`

# Code in Python3
```
class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        seen = set()
        n, m = len(grid), len(grid[0])
        l = n * m
        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

        def isValid(i, j):
            return 0 <= i < n and 0 <= j < m

        def bt(row, col):
            if len(seen) == l and grid[row][col] == 2:
                return 1

            result = 0

            for dx, dy in dirs:
                x, y = row + dx, col + dy
                key = (x, y)

                if isValid(x, y) and key not in seen and grid[row][col] != -1:
                    seen.add(key)
                    result += bt(x, y)
                    seen.remove(key)

            return result

        start = None

        for i in range(n):
            for j in range(m):
                match grid[i][j]:
                    case 1:
                        start = [i, j]
                        seen.add((i, j))

                    case -1:
                        l -=1

        return bt(start[0], start[1])
```
# Code in TypeScript
```
function uniquePathsIII(grid: number[][]): number {
    const seen = new Set();
    const [n, m] = [grid.length, grid[0].length];
    let l = n * m;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const keify = (i: number, j: number) => `${i}-${j}`;

    const isValid = (i: number, j: number) => 0 <= i && i < n && 0 <= j && j < m;

    const bt = (row: number, col: number) => {
        if (seen.size === l && grid[row][col] === 2) return 1

        let result = 0

        for (const [dx, dy] of dirs) {
            const [x, y] = [row + dx, col + dy];
            const key = keify(x, y);

            if (isValid(x, y) && !seen.has(key) && grid[row][col] !== -1) {
                seen.add(key);
                result += bt(x, y);
                seen.delete(key);
            }
        }

        return result
    };

    let start = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            switch (grid[i][j]) {
                case 1: {
                    start = [i, j];
                    seen.add(keify(i, j));
                    break;
                }

                case -1: {
                    l--;
                    break
                }
            }
        }
    }

    return bt(start[0], start[1]);
}
```