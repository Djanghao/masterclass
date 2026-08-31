# Swift 🍏

**Author:** BytePixelMelody
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5698231/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5698231/)

---

# Code
```swift []

class NeighborSum {
    let adjacents: [(row: Int, col: Int)] = [(0, -1), (0, 1), (-1, 0), (1, 0)]
    let diagonals: [(row: Int, col: Int)] = [(-1, -1), (-1, 1), (1, -1), (1, 1)]
    let grid: [[Int]]

    init(_ grid: [[Int]]) {
        self.grid = grid
    }
    
    func adjacentSum(_ value: Int) -> Int {
        guard let (row, col) = index(of: value) else { return 0 }
        var sum = 0
        
        for adjacent in adjacents {
            let r = row + adjacent.row
            let c = col + adjacent.col
            guard r >= 0, c >= 0, r < grid.count, c < grid[0].count else { continue }
            sum += grid[r][c]
        }
        
        return sum
    }
    
    func diagonalSum(_ value: Int) -> Int {
        guard let (row, col) = index(of: value) else { return 0 }
        var sum = 0
        
        for diagonal in diagonals {
            let r = row + diagonal.row
            let c = col + diagonal.col
            guard r >= 0, c >= 0, r < grid.count, c < grid[0].count else { continue }
            sum += grid[r][c]
        }
        
        return sum
    }
    
    private func index(of value: Int) -> (Int, Int)? {
        guard !grid.isEmpty else { return nil }
        
        for i in 0..<grid.count {
            for j in 0..<grid[0].count where grid[i][j] == value {
                return (i, j)
            }
        }
        
        return nil
    }
}
```