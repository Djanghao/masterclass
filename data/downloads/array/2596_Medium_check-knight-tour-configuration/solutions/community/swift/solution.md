# Swift Solution | Simple Grid Traversal | Time Complexity: O(M * N) | Space Complexity: O(1)

**Author:** Amangoel123
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/4674881/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/4674881/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It's a simple array traversal problem where let say if you are at a cell then you can move in 8 direction 

(i.e. [2, +1], [2, -1], [-2, +1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2)) 

now simply start from the 0th cell which is at (0,0) position and see if there exist next value that is 1 in any of the 8 position where we can go next.

 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
we are going to traverse all the cell of the grid in case of success which simply means time complexity of O(M X N) where M, N is the number of rows and columns respectively.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space complexity is going to be O(1) since we are not using any additional space apart from space consumed by variables.

# Code
```
class Solution {
    func checkValidGrid(_ grid: [[Int]]) -> Bool {
        var rows = grid.count
        var cols = grid[0].count
        var lastValue = (rows * cols) - 1
        var prevValue = -1
        var x = 0
        var y = 0
        var currentValue = 0
        var moves = [[2, +1], [2, -1], [-2, +1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]
        
        if grid[0][0] != 0 {
            return false
        }

        while (currentValue < lastValue && prevValue != currentValue) {
            prevValue = currentValue
            for iterator in moves {
                var nextX = x + iterator[0]
                var nextY = y + iterator[1]

                if nextX >= 0 && nextX < rows && nextY >= 0 && nextY < cols && grid[nextX][nextY] == currentValue + 1 {
                    x = nextX
                    y = nextY
                    currentValue = currentValue + 1
                    break
                }
            }
        }

        if currentValue == lastValue {
            return true
        }

        return false
    }
}
```