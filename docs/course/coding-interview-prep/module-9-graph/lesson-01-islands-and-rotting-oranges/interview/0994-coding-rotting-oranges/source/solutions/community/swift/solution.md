# Swift - BFS and Set

**Author:** prashant1207-
**Votes:** 3
**Link:** [https://leetcode.com/problems/rotting-oranges/solutions/575614/](https://leetcode.com/problems/rotting-oranges/solutions/575614/)

---

```
class Solution {
    func orangesRotting(_ grid: [[Int]]) -> Int {
        struct Cell: Hashable {
            let row: Int
            let col: Int
        }
        
        var fresh: Set<Cell> = []
        var rotten: Set<Cell> = []
        var minutes = 0
        
        for i in stride(from: 0, to: grid.count, by: 1) {
            for j in stride(from: 0, to: grid[i].count, by: 1) {
                let current = grid[i][j]
                if current == 1 {
                    fresh.insert(Cell(row: i, col: j))
                } else if current == 2 {
                    rotten.insert(Cell(row: i, col: j))
                }
            }
        }
        
        let direction = [[1,0], [0,1], [-1,0], [0,-1]]
        while !fresh.isEmpty {
            var infected: Set<Cell> = []
            rotten.forEach { cell in
                direction.forEach { direction in
                    let item = Cell(row: cell.row + direction[0], col:  cell.col + direction[1])
                    if fresh.contains(item) {
                        fresh.remove(item)
                        infected.insert(item)
                    }
                }
            }
            
            if infected.isEmpty {
                return -1
            }
            
            rotten = infected
            minutes += 1
        }
        
        
        return minutes
    }
}
```