# ✅🔥 Easy to understand solution with Graph Breadth First Search (BFS) solution 🔥✅

**Author:** glasseyes
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-maze/solutions/3914641/](https://leetcode.com/problems/the-maze/solutions/3914641/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can think of the game map as a graph, but since the ball will not stop rolling until it reaches the border or a wall, when we build the adjecency list for each node, for each direction, we must keep going until we reach an obstacle. Give that, we can solve this problem using Breadth First Search (BFS), which has an added bonus of guaranteeing that the first time we reach the destination, it'll be the fastest route as well.

OBS.: We should use memoization in order to not take looping paths into account.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a Set of strings to store the tiles we already walked. Since TypeScript cannot correctly judge whether or not an array is already in a Set, we will use the string representation of the array to store it ```memo = new Set<string>()```.
2. Initialize a queue with the starting tile in the map ```const q = [start]```
3. While there are elements in the queue, 
    1. Get the first position from the queue
    2. If the position is equal to the destination, return true (we can reach the goal)
    3. If not, if we already visited this tile, continue on to the next position in the queue
    4. Add the current position to the visited set
    5. Add all the adjacent tiles the ball can reach in each direction. I have created an auxiliary function to calculate it, but if you prefer to do it directly in the while loop, that should work as well.
4. If we have reach the end of the queue, this means that *even though the ball might be able to roll through the goal tile*, it cannot stop in the destination position. Return ```false```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(m * n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(m * n)$$

# Code
```
function hasPath(maze: number[][], start: number[], destination: number[]): boolean {
    const M = maze.length, N = maze[0].length;
    
    function getValidMoves(pRow: number, pCol: number): number[][] {
        const directions = [[-1,0],[0,-1],[1,0],[0,1]];
        const moves = [];
        for (const [r, c] of directions) {
            let row = pRow, col = pCol;
            if (row+r < 0 || row+r >= M || col+c < 0 || col+c >= N || maze[row+r][col+c] === 1) continue;

            while (row + r >= 0 && 
                   row + r < M && 
                   col + c >= 0 && 
                   col + c < N && 
                   maze[row + r][col + c] === 0) {
                row += r;
                col += c;
            }

            moves.push([row, col]);
        }

        return moves;
    }

    const memo = new Set<string>();

    const q = [start];
    while (q.length) {
        const [row, col] = q.shift();
        if (row === destination[0] && col === destination[1]) return true;

        if (memo.has(`${row},${col}`)) continue;
        memo.add(`${row},${col}`);

        q.push(...getValidMoves(row, col));
    }

    return false;
};
```