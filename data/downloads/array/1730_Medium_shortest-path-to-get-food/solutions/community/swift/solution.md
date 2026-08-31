# Easy to Understand Swift Solution with Comments 100% Best

**Author:** brainshot
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-to-get-food/solutions/2497318/](https://leetcode.com/problems/shortest-path-to-get-food/solutions/2497318/)

---

This is just like the Snake problem where you have to find the nearest path out of the maze.

    func getFood(_ grid: [[Character]]) -> Int {
        var grid = grid
        var start: [Int] = []
        
        for row in 0..<grid.count {
            for col in 0..<grid[0].count {
                if grid[row][col] == "*" { // Find starting point
                    start = [row, col]
                }
            }
        }
        
        var toVisit: [[Int]] = [start]
        var pathLength = -1
        
        while !toVisit.isEmpty {
            pathLength += 1
            
            for _ in 0..<toVisit.count {
                let gridIndex = toVisit.removeFirst()
                let row = gridIndex[0]
                let col = gridIndex[1]
                
                if grid[row][col] == "#" { // Found food
                    return pathLength
                }
                
                let dimensions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
                for d in dimensions {
                    let newRow = row + d[0]
                    let newCol = col + d[1]
                    
                    guard newRow >= 0, newCol >= 0, newRow < grid.count, newCol < grid[0].count, grid[newRow][newCol] != "X" else { continue }
                    if grid[newRow][newCol] == "O" {
                        grid[newRow][newCol] = "X"
                    } 
                    toVisit.append([newRow, newCol])
                }
            }
        }
        return -1
    }