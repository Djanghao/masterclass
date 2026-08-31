# Swift simulation + dynamic programming

**Author:** LightSide-Alex
**Votes:** 3
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/2692297/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/2692297/)

---

```

class Solution {
    func findBall(_ grid: [[Int]]) -> [Int] {
        guard !grid.isEmpty else { return [] }
        let columns = grid[0].count
        var result: [Int] = .init(repeating: -1, count: columns)
        
        ballsLoop: for startColumn in stride(from: 0, to: columns, by: 1) {
            var column = startColumn
            for row in stride(from: 0, to: grid.count, by: 1) {
                guard let element = grid[row][safe: column],
                let adjacentElement = grid[row][safe: column + element] else {
                    continue ballsLoop 
                }
                if element + adjacentElement == 0 {
                    continue ballsLoop
                }
                column += element
            }
            result[startColumn] = column
        }
        return result
    }
}

extension Collection {
    subscript(safe index: Index) -> Element? {
        indices.contains(index) ? self[index] : nil
    }
}
```

DP approach:
```

class Solution {
    func findBall(_ grid: [[Int]]) -> [Int] {
        guard !grid.isEmpty else { return [] }
        let columns = grid[0].count
        var result: [Int] = []
        var dp: [[Int]] = .init(repeating: .init(repeating: -1, count: columns), count: grid.count + 1)
        
        for row in stride(from: dp.count - 1, to: -1, by: -1) {
            for column in stride(from: 0, to: columns, by: 1) {
                if row == dp.count - 1 {
                    dp[row][column] = column
                    continue
                }
                
                let nextColumn = column + grid[row][column]
                if let value = dp[row + 1][safe: nextColumn], grid[row][safe: nextColumn] == grid[row][column] {
                    dp[row][column] = value
                }
                if row == 0 {
                    result.append(dp[row][column])
                }
            }
        }
        return result
    }
}

extension Collection {
    subscript(safe index: Index) -> Element? {
        indices.contains(index) ? self[index] : nil
    }
}
```