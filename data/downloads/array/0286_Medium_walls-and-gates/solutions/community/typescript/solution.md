# Typescript BFS

**Author:** sareini
**Votes:** 0
**Link:** [https://leetcode.com/problems/walls-and-gates/solutions/5315153/](https://leetcode.com/problems/walls-and-gates/solutions/5315153/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Iterate over the board, and perform a BFS from each gate, and set the min vlaue each time

# Complexity
### Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(G * N)$$ where G is the number of gates and N is the number of rooms

### Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(N)$$ since we use at most each item in the board once per iteration

# Code
```
/**
 Do not return anything, modify rooms in-place instead.
 */

function serealize(row: number, col: number) {
    return `${row}_${col}`
}

function isRoom(val: number) {
    return val !== 0 && val !== -1
}

function getNeighborCoordinates(row: number, col: number, rows: number, cols: number): number[][] {
    const res = []
    if (row > 0) res.push([row - 1, col]);
    if (row < rows - 1) res.push([row + 1, col]);
    if (col > 0) res.push([row, col - 1]);
    if (col < cols - 1) res.push([row, col + 1])

    return res;
}

function wallsAndGates(rooms: number[][]): void {
    const rows = rooms.length;
    const cols = rooms[0].length;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // BFS from each gate
            if (rooms[r][c] === 0) {
                // we need to track whats seen on a per-bfs basis
                const seen = new Set();
                const queue = new Array<[[number, number], number]>([[r, c], 0]);
                while (queue.length) {
                    const [[row, col], dist] = queue.shift();
                    // enqueue all neighbors and mark as seen before updating this
                    getNeighborCoordinates(row, col, rows, cols).map(([row, col]) => {
                        if (!seen.has(serealize(row, col)) && isRoom(rooms[row][col])) {
                            queue.push([[row, col], dist + 1]);
                            seen.add(serealize(row, col));
                        }
                    })
                    if (isRoom(rooms[row][col])) {
                        rooms[row][col] = Math.min(rooms[row][col], dist)
                    }
                }
            }
        }
    }
};
```