# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-with-maximum-gold/solutions/5155793/](https://leetcode.com/problems/path-with-maximum-gold/solutions/5155793/)

---

# Complexity
- Time complexity: $$O(n * m * 4 ^ {n * m})$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n * m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private func dp(_ i: Int, _ j: Int, _ grid: inout [[Int]]) -> Int {
        guard i >= .zero && i < grid.count && 
                j >= .zero && j < grid[i].count &&
                grid[i][j] != .zero else {
            return .zero
        }

        let subRes = grid[i][j]
        grid[i][j] = .zero
        defer {
            grid[i][j] = subRes
        }
        return subRes + max(
            dp(i + 1, j, &grid),
            dp(i - 1, j, &grid),
            dp(i, j + 1, &grid),
            dp(i, j - 1, &grid)
        )
    }

    func getMaximumGold(_ grid: [[Int]]) -> Int {
        var result = 0
        var grid = grid
        for i in 0 ..< grid.count {
            for j in 0 ..< grid[i].count {
                result = max(result, dp(i, j, &grid))
            }
        }
        return result
    }
}
```