# BFS solution

**Author:** kyakubov
**Votes:** 0
**Link:** [https://leetcode.com/problems/coloring-a-border/solutions/5703380/](https://leetcode.com/problems/coloring-a-border/solutions/5703380/)

---

# Intuition
The problems asks us to color all connected nodes except the ones that are surrounded by the same nodes (See photos in the problem comments for better understanding)

# Approach
Breadth-first Search, DFS can be also applied.
1. Search for the node to avoid while painting the connected nodes
2. Paint the nodes except the surrounded nodes.

# Complexity
- Time complexity: O (m * n)

- Space complexity: O (m * n)

# Code
```swift []
class Solution {
    func colorBorder(_ grid: [[Int]], _ row: Int, _ col: Int, _ color: Int) -> [[Int]] {
        var grid = grid
        var curr = grid[row][col]
        var queue: [(Int, Int)] = [(row, col)]
        var visited: [[Bool]] = Array(repeating: Array(repeating: false, count: grid[0].count), count: grid.count)
        var avoid: [[Bool]] = Array(repeating: Array(repeating: false, count: grid[0].count), count: grid.count)

        while !queue.isEmpty {
            let (i, j) = queue.removeFirst()
            
            if i >= 0 && i < grid.count && j >= 0 && j < grid[0].count && grid[i][j] == curr && !visited[i][j] {
                
                if i > 0 && i < grid.count - 1 && j > 0 && j < grid[0].count - 1 {
                    let top = grid[i + 1][j]
                    let bottom = grid[i - 1][j]
                    let left = grid[i][j - 1]
                    let right = grid[i][j + 1]

                    if top == curr, bottom == curr, left == curr, right == curr {
                        avoid[i][j] = true                        
                    }
                }

                visited[i][j] = true
                queue.append((i, j + 1))
                queue.append((i, j - 1))
                queue.append((i + 1, j))
                queue.append((i - 1, j))
            }
        }
        
        visited = Array(repeating: Array(repeating: false, count: grid[0].count), count: grid.count)
        queue = [(row, col)]

        while !queue.isEmpty {
            let (i, j) = queue.removeFirst()
            
            if i >= 0 && i < grid.count && j >= 0 && j < grid[0].count && grid[i][j] == curr && !visited[i][j] {

                if avoid[i][j] == false {
                    grid[i][j] = color
                }
                visited[i][j] = true
                queue.append((i, j + 1))
                queue.append((i, j - 1))
                queue.append((i + 1, j))
                queue.append((i - 1, j))
            }
        }
        
        return grid
    }
}

//given
[1,2,1,2,1,2]
[2,2,2,2,1,2]
[1,2,2,2,1,2]

//wrong
[1,1,1,1,1,2]
[1,2,2,2,1,2]
[1,1,1,1,1,2]

//expected
[1,1,1,1,1,2]
[1,2,1,1,1,2]
[1,1,1,1,1,2]


```