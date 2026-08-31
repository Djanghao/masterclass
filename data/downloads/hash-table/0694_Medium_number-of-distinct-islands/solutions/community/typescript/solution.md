# BFS While Storing Distinct Coordinates for Island in a Hash

**Author:** recneps56
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solutions/5118091/](https://leetcode.com/problems/number-of-distinct-islands/solutions/5118091/)

---

# Intuition
First we need to iterate through every island while storing which cells have been visited. Then we will need to de-duplicate islands of the same shape using a hash.

# Approach
For each cell we will check if it's an island (value = 1) and it's not been visited. If it is an island we will iterate through the complete island using BFS. To check islands of the same shape when we start BFS we will keep track of the distinct coordinates starting back at `0,0` and incrementing them whenever we find another cell of the island. Then joining these distinct coordinates to a string to create a hash we can deduplicate when visiting the next island.

Once we have iterated through the entire grid we can just return the size of the distinct island shape hashes.

# Complexity
- Time complexity: `O (n)` we go through every cell at max once.

- Space complexity: `O (2n)` we store every visited cell and create a hash string containing all the cells in the worst case. Note, this simplifies to `O (n)`

# Code
```
function numDistinctIslands(grid: number[][]): number {
    const rows: number = grid.length;
    const cols: number = grid[0].length;
    const visited: Set<string> = new Set();
    const distinctIslands: Set<string> = new Set();

    const bfs = (row: number, col: number): void => {
        const queue: number[][] = [[row, col, 0, 0]];
        const distinctCoordinates: number[][] = [];
        visited.add(`${row},${col}`);
        while (queue.length > 0) {
            const current: number[] = queue.shift();
            const row: number = current[0];
            const col: number = current[1];
            const distinctRow: number = current[2];
            const distinctCol: number = current[3];
            distinctCoordinates.push([distinctRow, distinctCol]);
            // Check above
            if (row - 1 >= 0 && !visited.has(`${row - 1},${col}`) && grid[row - 1][col] === 1) {
                visited.add(`${row - 1},${col}`);
                queue.push([row - 1, col, distinctRow - 1, distinctCol]);
            }
            // Check below
            if (row + 1 < rows && !visited.has(`${row + 1},${col}`) && grid[row + 1][col] === 1) {
                visited.add(`${row + 1},${col}`);
                queue.push([row + 1, col, distinctRow + 1, distinctCol]);
            }
            // Check left
            if (col - 1 >= 0 && !visited.has(`${row},${col - 1}`) && grid[row][col - 1] === 1) {
                visited.add(`${row},${col - 1}`);
                queue.push([row, col - 1, distinctRow, distinctCol - 1]);
            }
            // Check right
            if (col + 1 < cols && !visited.has(`${row},${col + 1}`) && grid[row][col + 1] === 1) {
                visited.add(`${row},${col + 1}`);
                queue.push([row, col + 1, distinctRow, distinctCol + 1]);
            }
        }
        const distinctEntry: string = distinctCoordinates.sort((a, b) => a[0] - b[0]).toString();
        distinctIslands.add(distinctEntry);
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1 && !visited.has(`${row},${col}`)) {
                bfs(row, col);
            }
        }
    }

    return distinctIslands.size;
};
```