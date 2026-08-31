# Swift Solution -- Clean Code -- DFS & BFS

**Author:** qilio
**Votes:** 15
**Link:** [https://leetcode.com/problems/number-of-islands/solutions/347290/](https://leetcode.com/problems/number-of-islands/solutions/347290/)

---

```
class Solution {
    func numIslands(_ grid: [[Character]]) -> Int {
        guard grid.count != 0, grid[0].count != 0 else { return 0 }
        var count = 0
        var grid = grid
        
        for row in 0..<grid.count {
            for col in 0..<grid[0].count {
                if grid[row][col] == "1" {
                    DFS(row, col, &grid)
                    //BFS(row, col, &grid)
                    count += 1
                }
            }
        }
        return count
    }
	
    // DFS
    func DFS(_ row: Int, _ col: Int, _ grid: inout [[Character]]) {
        guard row >= 0, row < grid.count, col >= 0, col < grid[0].count, grid[row][col] == "1" else { return }
        grid[row][col] = "0" // set visited
        
        DFS(row-1, col, &grid)
        DFS(row+1, col, &grid)
        DFS(row, col-1, &grid)
        DFS(row, col+1, &grid)
    }
	
    // BFS
    func BFS(_ row: Int, _ col: Int, _ grid: inout [[Character]]) {
        var queue = [(Int,Int)]()
        queue.append((row, col))
        grid[row][col] = "0" // set visited
        
        while queue.count != 0 {
            let current = queue.removeFirst()
            let (curRow, curCol) = current
            
            if curRow-1 >= 0, grid[curRow-1][curCol] == "1" { 
                queue.append((curRow-1, curCol))
                grid[curRow-1][curCol] = "0"
            }
            if curRow+1 < grid.count, grid[curRow+1][curCol] == "1" { 
                queue.append((curRow+1, curCol)) 
                grid[curRow+1][curCol] = "0"
            }
            if curCol-1 >= 0, grid[curRow][curCol-1] == "1" { 
                queue.append((curRow, curCol-1)) 
                grid[curRow][curCol-1] = "0"
            }
            if curCol+1 < grid[0].count, grid[curRow][curCol+1] == "1" { 
                queue.append((curRow, curCol+1)) 
                grid[curRow][curCol+1] = "0"
            }
        }
    }
}
```