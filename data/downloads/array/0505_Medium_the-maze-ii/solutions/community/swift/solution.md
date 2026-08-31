# 💡Swift - Optimal Solution - Breadth-First Search

**Author:** bernikovich
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-maze-ii/solutions/4162232/](https://leetcode.com/problems/the-maze-ii/solutions/4162232/)

---

# Solution
```
class Solution {
    func shortestDistance(_ maze: [[Int]], _ start: [Int], _ destination: [Int]) -> Int {
        // We can use bit operations to reuse a single maze matrix for both
        // path finding and marking the seen cells.
        var seen: Set<Int> = []
        let directions = [[0, -1], [0, 1], [1, 0], [-1, 0]]
        
        // Add initial options.
        var options: [(i: Int, j: Int, d: Int)] = directions.indices.map { (start[0], start[1], $0) }

        // Returns true when the ball hits a wall.
        func appendOptions(_ i: Int, _ j: Int, _ directionIndex: Int) -> Bool {
            let delta = directions[directionIndex]
            let newI = i + delta[0]
            let newJ = j + delta[1]
            if 0..<maze.count ~= newI && 0..<maze[i].count ~= newJ && maze[newI][newJ] == 0 {
                let key = (((newI * 1000) + newJ) * 10) + directionIndex
                if seen.insert(key).inserted {
                    options.append((newI, newJ, directionIndex))
                }
                return true
            }
            return false
        }

        // BFS one cell at a time.
        var answer = 0
        while !options.isEmpty {
            let currentOptions = options
            options = []
            for (i, j, directionIndex) in currentOptions {                
                if !appendOptions(i, j, directionIndex) {
                    if i == destination[0] && j == destination[1] { return answer }
                    directions.indices.forEach { appendOptions(i, j, $0) }
                }
            }
            answer += 1
        }

        return -1
    }
}

```

# Complexity
- Time: $$O(nm)$$ we cannot visit the same cell more than four times.
- Space: $$O(nm)$$