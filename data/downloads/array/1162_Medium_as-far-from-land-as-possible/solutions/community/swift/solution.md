# Swift - Clean BFS w/ Time Complexity & Explanation

**Author:** nickreps
**Votes:** 0
**Link:** [https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3170048/](https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3170048/)

---



# Approach
Use BFS to populate visited row with value of current path (i.e. each zero will be an increase in our path sum). This changes any zeroes to non zero, effectively preventing re-visitation of any cell.

# Complexity
- Time complexity: O(n^2), this is assuming you use a real queue that has O(1) removefirst time complexity (i.e. using a Deque, but it does not appear leetcode supports this swift feature)

- Space complexity: O(n^2), as our queue will grow with the size of our input

# Code
```
class Solution {
    func maxDistance(_ grid: [[Int]]) -> Int {
        var gridCount = grid.count
        var q = [[Int]]()
        var grid = grid
        for row in 0..<grid.count {
            for col in 0..<grid[0].count {
                if grid[row][col] == 1 {
                    q.append([row, col])
                }
            }
        }

        var result = -1
        var directions = [(0,1), (0,-1), (1,0), (-1,0)]

        while !q.isEmpty {
            let vals = q.removeFirst()
            let row = vals[0]
            let col = vals[1]
            result = grid[row][col]
            for pairs in directions {
                var newR = pairs.0 + row
                var newC = pairs.1 + col
                if (min(newR, newC) >= 0 && max(newR, newC) < gridCount && grid[newR][newC] == 0) {
                    q.append([newR, newC])
                    grid[newR][newC] = grid[row][col] + 1
                }
            }
        }
        return result > 1 ? (result - 1) : -1
    }
}



```