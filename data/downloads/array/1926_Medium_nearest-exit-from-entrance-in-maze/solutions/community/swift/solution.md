# 💡Swift - Optimal Solution - Breadth-First Search

**Author:** bernikovich
**Votes:** 2
**Link:** [https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/4324120/](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/4324120/)

---

# Solution
```
class Solution {
    struct Index: Hashable {
        let x, y: Int
    }
    func nearestExit(_ maze: [[Character]], _ entrance: [Int]) -> Int {
        let n = maze.count
        let m = maze[0].count

        let startIndex = Index(x: entrance[1], y: entrance[0])

        var visited: Set<Index> = [startIndex]
        var queue: Set<Index> = [startIndex]

        var steps = 0
        while !queue.isEmpty {
            steps += 1
    
            var nextQueue: Set<Index> = []
            for index in queue {
                for (dX, dY) in [(-1, 0), (0, -1), (1, 0), (0, 1)] {
                    let next = Index(x: index.x + dX, y: index.y + dY)

                    // Validate the index is inside the bounds.
                    guard 0..<m ~= next.x && 0..<n ~= next.y else { continue }

                    // Validate it's not a wall. 
                    guard maze[next.y][next.x] == "." else { continue }

                    guard visited.insert(next).inserted else { continue }
                    nextQueue.insert(next)

                    // Check if it's an exit.
                    if (next.x == 0 || next.x == m - 1 || next.y == 0 || next.y == n - 1) {
                        return steps
                    }
                }
            }
            queue = nextQueue
        }

        return -1
    }
}
```
# Complexity
- Time: $$O(n \\cdot m)$$
- Space: $$O(max(n, m))$$