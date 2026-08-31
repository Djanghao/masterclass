# O(N∗M*(N+M)) Solution in Swift using BFS Dijkstra algorithm algo

**Author:** olegmetallic
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6091927/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6091927/)

---

# Approach
Once you realize that this problem can be solved using BFS Dijkstra algorithm - it becomes pretty straightforward.
Let's declare our queue as an array of tupples, where first element is count of obstacles needed to be removed and the second is cell `[x, y]`.
Now we start the loop where we check that our `queue` is not empty and pop first element from the queue with the smallest removal count. Here we check whether we reached the bottom right corner of the grid, if yes return `count`, otherwise loop though all possible directions `(right,left,top,down)` check whether new indicies are in grid bounds and the cell is not visited yet, append new cell to the queue and increase count by `1` if this cell contains obstacle, also update `visited` set with a new cell.

# Complexity
- Time complexity:
O(n * m * (n+m)) - run through all grid cells and get the min count, where `n` is rows count and `m` is column count.
> note: to improve it to run in O(n * m * log(n+m)) we need to use priority queue instead of usual array.

- Space complexity:
O(n * m) - store visited cells set.

# Code
```swift []
class Solution {
    func minimumObstacles(_ grid: [[Int]]) -> Int {
        let rows = grid.count
        let cols = grid[0].count
        var visited: Set<[Int]> = []
        var queue = [(count: 0, cell: [0, 0])]
        while !queue.isEmpty {
            let index = queue.enumerated().min(by: { $0.element.count < $1.element.count })!.offset
            let (count, cell) = queue.remove(at: index)
            if cell == [rows - 1, cols - 1] { return count }
            for direction in [(0, 1), (0, -1), (1, 0), (-1, 0)] {
                let x = cell[0] + direction.0
                let y = cell[1] + direction.1
                guard x >= 0, x < rows, y >= 0, y < cols, !visited.contains([x, y]) else { continue }
                queue.append((count + grid[x][y], [x, y]))
                visited.insert([x, y])
            }
        }
        return 0
    }
}
```