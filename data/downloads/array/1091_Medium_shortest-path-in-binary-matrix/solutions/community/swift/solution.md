# Swift | BFS

**Author:** OrchidHunter
**Votes:** 4
**Link:** [https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/3584112/](https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/3584112/)

---

**BFS (accepted answer)**
```
class Solution {
    func shortestPathBinaryMatrix(_ grid: [[Int]]) -> Int {
        guard grid[0][0] == 0 else { return -1 }
        let deltas = [[-1, -1], [-1, 1], [1,-1], [1,1], [-1,0], [1,0], [0,1], [0,-1]]
        var bfs = [[0,0]], pathSize = 1, grid = grid
        while !bfs.isEmpty {
            guard !bfs.contains([grid.count-1, grid.count-1]) else { return pathSize }
            bfs = bfs.flatMap { node in
                deltas.compactMap { delta in
                    let (x, y) = (node[0] + delta[0], node[1] + delta[1])
                    guard grid.indices ~= x && grid.indices ~= y && grid[y][x] == 0 else { return nil }
                    grid[y][x] = 1
                    return [x,y]
                }
            }
            pathSize += 1
        }
        return -1
    }
}
```