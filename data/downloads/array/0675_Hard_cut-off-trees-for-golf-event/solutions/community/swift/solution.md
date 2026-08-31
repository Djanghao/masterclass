# Swift solution - BFS

**Author:** cl0ud_runner
**Votes:** 2
**Link:** [https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/107428/](https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/107428/)

---

```
class Solution {
    
    let directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    
    func cutOffTree(_ forest: [[Int]]) -> Int {
        if forest.count == 0 || forest[0].count == 0 {
            return -1
        }
        
        let m = forest.count
        let n = forest[0].count
        var result = 0
        var startX = 0
        var startY = 0
        var heights = [(Int, (Int, Int))]()
        
        for i in 0..<m {
            for j in 0..<n {
                if forest[i][j] > 1 {
                    heights .append((forest[i][j], (i, j)))
                }
            }
        }
        heights.sort { (height1: (Int, (Int, Int)), height2: (Int, (Int, Int))) -> Bool in
            return height1.0 < height2.0
        }
        
        for i in 0..<heights.count {
            let endX = heights[i].1.0
            let endY = heights[i].1.1
            let steps = BFS(forest, m, n, startX, startY, endX, endY)
            if steps == -1 {
                return -1
            }
            result += steps
            startX = endX
            startY = endY
        }
        
        return result
    }
    
    private func BFS(_ forest: [[Int]], _ m: Int, _ n: Int, _ startX: Int, _ startY: Int, _ endX: Int, _ endY: Int) -> Int {
        if startX == endX && startY == endY {
            return 0
        }
        
        var steps = 0
        var queue = [(Int, Int)]()
        var visited = [[Bool]](repeatElement([Bool](repeatElement(false, count: n)), count: m))
        
        queue.append((startX, startY))
        visited[startX][startY] = true
        
        while !queue.isEmpty {
            let count = queue.count
            steps += 1
            for _ in 0..<count {
                let (x, y) = queue.removeFirst()
                for i in 0..<directions.count {
                    let nextX = x + directions[i].0
                    let nextY = y + directions[i].1
                    if nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && forest[nextX][nextY] > 0 && !visited[nextX][nextY] {
                        if nextX == endX && nextY == endY {
                            return steps
                        }
                        visited[nextX][nextY] = true
                        queue.append((nextX, nextY))
                    }
                }
            }
        }
        
        return -1
    }
    
}
```