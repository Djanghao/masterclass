# Javascript | Dijkstra's solution

**Author:** lpizzinidev
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-maze-ii/solutions/1873806/](https://leetcode.com/problems/the-maze-ii/solutions/1873806/)

---

```
// Priority queue implementation
class PriorityQueue {
    constructor() {
        this.items = []
    }

    enqueue(element, priority) {
        const newItem = new QueueItem(element, priority)

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > priority) {
                this.items.splice(i, 0, newItem)
                return 
            }
        }

        this.items.push(newItem)
    }

    dequeue() {
        if (this.isEmpty()) return
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }
}

class QueueItem {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}

var shortestDistance = function(maze, start, destination) {
    // Start - end coordinates
    const [startX, startY] = start
    const [destX, destY] = destination
    // Cell types 
    const EMPTY_CELL = 0
    const WALL = 1
    // Directions
    const DIRS = [
        [1,0],
        [0,1],
        [-1,0],
        [0,-1]
    ]
    // Size of the maze
    const n = maze.length 
    const m = maze[0].length
    // Initialize an array to store the distances of each cell to +inf
    const distances = Array(n).fill(0).map(() => Array(m).fill(Number.MAX_SAFE_INTEGER))
    // Initialize a priorityQueue
    const priorityQueue = new PriorityQueue()
    // Set start distance to zero and add it to the priority queue 
    distances[startX][startY] = 0
    priorityQueue.enqueue({ x: startX, y: startY, dist: 0}, 0)
    // While the priority queue is not empty 
    while (!priorityQueue.isEmpty()) {
        // Dequeue the next element
        const { x, y, dist } = priorityQueue.dequeue().element
        // Explore the 4 directions until a wall is hit or OOB
        for (const [deltaX, deltaY] of DIRS) {
            let curX = x
            let curY = y 
            let curDist = dist 
            while (
                inbound(curX+deltaX, curY+deltaY, n, m) && 
                maze[curX+deltaX][curY+deltaY] !== WALL
            ) {
                curX += deltaX
                curY += deltaY
                curDist++
            }
            // If destination, return the distance
            if (curX === destX && curY === destY) return curDist
            // If didn't move, continue
            if (x === curX && y === curY) continue
            // If the newDistance can be updated
            if (distances[curX][curY] > curDist) {
                // Update the distance and add the cell to the pq
                distances[curX][curY] = curDist          
                priorityQueue.enqueue({ x: curX, y: curY, dist: curDist }, curDist)
            }
        }
    }
    // Return -1 (not reachable)
    return -1
};

// Check if a point is in bound
const inbound = (x, y, n, m) => {
    return 0 <= x && x < n && 0 <= y && y < m
}
```