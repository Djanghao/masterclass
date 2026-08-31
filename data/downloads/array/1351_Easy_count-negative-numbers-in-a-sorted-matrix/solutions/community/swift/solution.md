# Swift : O(m + n)

**Author:** deepal15
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/3098714/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/3098714/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Staircase pattern

# Approach
<!-- Describe your approach to solving the problem. -->
1. Start from the bottom left
2. If the existing element is `-ve` go to previous row and `row - column`
3. If the existing element is `+ve` increase the `column`

# Complexity
- Time complexity: $$O(m + n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func countNegatives(_ grid: [[Int]]) -> Int {
        let n = grid.count
        let m = grid[0].count
        var r = n - 1
        var c = 0
        var result = 0
        
        while r >= 0 && c < m {
            if grid[r][c] < 0 {
                r -= 1
                result += m - c
            } else {
                c += 1
            }
        }
        return result
    }
}
```

# Reference
https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/510249/java-python-3-2-similar-o-m-n-codes-w-brief-explanation-and-analysis/