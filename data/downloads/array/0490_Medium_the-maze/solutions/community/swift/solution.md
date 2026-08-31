# Clean Swift

**Author:** Subhanc
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze/solutions/5550157/](https://leetcode.com/problems/the-maze/solutions/5550157/)

---

# Intuition
Clean Swift

# Code
```
class Solution {
    func hasPath(_ maze: [[Int]], _ start: [Int], _ destination: [Int]) -> Bool {
        let rows = maze.count
        let cols = maze[0].count
        var visited = Array(repeating: Array(repeating: false, count: cols), count: rows)
        let directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]
        var queue = [[Int]]()
        
        queue.append(start)
        visited[start[0]][start[1]] = true
        
        while !queue.isEmpty {
            let s = queue.removeFirst()
            if s[0] == destination[0] && s[1] == destination[1] {
                return true
            }
            for dir in directions {
                var x = s[0] + dir[0]
                var y = s[1] + dir[1]
                while x >= 0 && y >= 0 && x < rows && y < cols && maze[x][y] == 0 {
                    x += dir[0]
                    y += dir[1]
                }
                // Subtract 1 square since we went 1 ahead with while loop. 
                x -= dir[0]
                y -= dir[1]
                if !visited[x][y] {
                    queue.append([x, y])
                    visited[x][y] = true
                }
            }
        }
        return false
    }
}

```