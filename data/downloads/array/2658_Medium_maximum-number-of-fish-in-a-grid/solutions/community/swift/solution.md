# Swift solution using recursion and memoization

**Author:** Prasann_1433
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/4262129/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/4262129/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(m * n)$$


# Code
```
class Solution {
    struct Pair: Hashable {
        let x: Int
        let y: Int
    }

    var visited: [Pair: Bool] = [:]

    func findMaxFish(_ grid: [[Int]]) -> Int {
        guard !grid.isEmpty else { return 0 }

        let rows = grid.count 
        let col = grid[0].count

        
        var sum = 0 

        for i in 0..<rows {
            for j in 0..<col {
                print("grid[i][j] \\(grid[i][j])")
                if grid[i][j] != 0 {
                    var tempArray: [Int] = [0]
                    checkForWaterInSurrounding(i, j, &tempArray, grid)
                    sum = max(sum, tempArray[0])
                }
                
            }
        }

        return sum
    }

    private func checkForWaterInSurrounding(_ row: Int, _ col: Int, _ tempArray: inout [Int], _ nums: [[Int]]) {
        guard row >= 0, row < nums.count, col >= 0, col < nums[0].count, nums[row][col] != 0 else { return }
        
        let pair = Pair(x: row, y: col)
        guard visited[pair] == nil else { return }

        var row = row
        var col = col

        let newNum = nums[row][col]
        tempArray[0] += newNum

        visited[pair] = true

        checkForWaterInSurrounding(row - 1, col, &tempArray, nums)
        checkForWaterInSurrounding(row + 1, col, &tempArray, nums)
        checkForWaterInSurrounding(row, col - 1, &tempArray, nums)
        checkForWaterInSurrounding(row, col + 1, &tempArray, nums)
    }
}
```