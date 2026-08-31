# Binary Search + Double BFS

**Author:** jasobs10
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-the-spreading-fire/solutions/5094084/](https://leetcode.com/problems/escape-the-spreading-fire/solutions/5094084/)

---

# Approach
The idea is to binary search for the maximum target wait time to successfully reach the end. The lower bound starts at 0 and the upper bound starts at 10^9 as given in the problem description.

Each check is for a target wait time during which:

1. The fire spreads during the wait time.  We use a BFS to spread the fire based on the target wait time. We start the BFS with all of the starting fires in the grid, and use a counter to know when to stop spreading (when it reaches the target wait time).

2. We do a BFS to make all possible moves for the person, starting at 0, 0. If we encounter a fire during a move, we elimate the current move.  At the end of each "step", we spread all of the fires by one more move.


# Complexity
- Time complexity:
O(n * m) time to search to grid
O(log k) to binary search solution - k is upper bound defined in problem description as 10^9
So:
O(n * m * log k)

- Space complexity:
O(n * m)

# Code
```
function maximumMinutes(grid: number[][]): number {
    const ogFireSet = new Set(); // Set to mark fire elements to avoid recreating grid
    const startingFires: number[][] = [];
    // initialize starting fire coordinates
    grid.forEach((row, x) => {
        row.forEach((val, y) => {
            if (val === 1) {
                startingFires.push([x, y]);
                ogFireSet.add(`${x}-${y}`);
            }
        });
    });

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const canFinishBfs = (targetWaitTime: number): boolean => {
        // BFS to spread fire based on the target wait time
        const fireSet = new Set(ogFireSet);
        let steps = 0;
        let queue = startingFires;
        // "move" the fire every minute, capped at target wait time
        while (queue.length && steps < targetWaitTime) {
            const next = [];
            for (const [x, y] of queue) {
                for (const [moveX, moveY] of directions) {
                    const newX = x + moveX;
                    const newY = y + moveY;

                    const newVal = grid[newX]?.[newY];

                    if (newVal === 0 && !fireSet.has(`${newX}-${newY}`)) {
                        next.push([newX, newY]);
                        fireSet.add(`${newX}-${newY}`);
                    }
                }
            }
            
            steps++;
            queue = next;
        }
        
        // BFS person to reach end
        const visited = new Set(['0-0']); // Set to track visited coordinates to avoid recreating grid
        let personQueue = [[0, 0]];
        while (personQueue.length) {
            const next = [];
            for (const [x, y] of personQueue) {
                if (x === grid.length - 1 && y === grid[0].length -1) {
                    return true;
                }

                // if the fire has spread to a current move then end the move
                if (fireSet.has(`${x}-${y}`)) {
                    continue;
                }

                for (const [moveX, moveY] of directions) {
                    const newX = x + moveX;
                    const newY = y + moveY;

                    const newVal = grid[newX]?.[newY];

                    // next moves are limited to unvisited clear spaces only
                    if (newVal === 0 && !visited.has(`${newX}-${newY}`) && !fireSet.has(`${newX}-${newY}`)) {
                        next.push([newX, newY]);
                        visited.add(`${newX}-${newY}`);
                    }
                }
            }
            
            personQueue = next;

            // spread each fire by one step if possible before the next player moves. only if there are remaining moves
            if (personQueue.length) {
                const nextFire = [];
                for (const [fireX, fireY] of queue) {
                    for (const [moveX, moveY] of directions) {
                        const newX = fireX + moveX;
                        const newY = fireY + moveY;

                        const newVal = grid[newX]?.[newY];

                        if (newVal === 0 && !fireSet.has(`${newX}-${newY}`)) {
                            nextFire.push([newX, newY]);
                            fireSet.add(`${newX}-${newY}`);
                        }
                    }
                }
                
                queue = nextFire;
            }
        }

        return false;
    }

    // set lower and upper bounds to binary search solution space (target wait time)
    // lowest is no wait time meaning fire does not spread from original coordinates
    let lower = 0;
    // upper bound is given in the problem description
    let upper = Math.pow(10, 9);
    let maxWaitTime = -1;
    while (lower <= upper) {
        // mid point of upper and lower bounds is the wait time to check
        const targetWaitTime = Math.floor((lower + upper) / 2);
        
        if (canFinishBfs(targetWaitTime)) {
            // if the person can escape with the target wait time
            // save the target wait time that works
            maxWaitTime = targetWaitTime;
            // increase lower bound to be one more than the wait time that works (find a higher value)
            lower = targetWaitTime + 1;
        } else {
            // if person cannot escape with the target wait time
            // decrease upper bound to be one less than wait time that failed (find a lower value)
            upper = targetWaitTime - 1;
        }
    }

    return maxWaitTime;
};
```