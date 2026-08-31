# Swift DFS solution very easy

**Author:** oldinzaghi
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4839782/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4839782/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minimumMoves(_ grid: [[Int]]) -> Int {
        var minMoves = Int.max
        var grid = grid

        func dfs(_ cur: Int, _ moves: Int, _ grid: inout [[Int]]) {
            if cur == 9 { 
                minMoves = min(moves, minMoves)
                return
            }
            let i = cur / 3
            let j = cur % 3
            if grid[i][j] != 0 { 
                dfs(cur + 1, moves, &grid)
                return
            }
            for x in 0..<3 {
                for y in 0..<3 {
                    if grid[x][y] <= 1 { continue }
                    grid[x][y] -= 1
                    grid[i][j] += 1
                    dfs(cur + 1, moves + abs(x-i)+abs(y-j), &grid)
                    grid[x][y] += 1
                    grid[i][j] -= 1
                }
            }
        }

        dfs(0, 0, &grid)
        return minMoves
        
    }
}
```