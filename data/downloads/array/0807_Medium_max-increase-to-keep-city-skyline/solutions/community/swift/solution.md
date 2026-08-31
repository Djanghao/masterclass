# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/4687016/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/4687016/)

---

# Complexity
- Time complexity: $$O(n * m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n + m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxIncreaseKeepingSkyline(_ grid: [[Int]]) -> Int {
        var rowMax = Array(repeating: 0, count: grid.count)
        var colMax = Array(repeating: 0, count: grid[0].count)
        for i in 0 ..< grid.count {
            for j in 0 ..< grid[0].count {
                rowMax[i] = max(rowMax[i], grid[i][j])
                colMax[j] = max(colMax[j], grid[i][j])
            }
        }

        var result = 0
        for i in 0 ..< grid.count {
            for j in 0 ..< grid[0].count {
                result += min(rowMax[i], colMax[j]) - grid[i][j]
            }
        }
        return result
    }
}
```