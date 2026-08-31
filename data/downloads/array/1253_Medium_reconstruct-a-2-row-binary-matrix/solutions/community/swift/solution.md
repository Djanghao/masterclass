# Swift solution

**Author:** Yan_feng
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/6110442/](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/6110442/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(N)$$

- Space complexity:
$$O(N)$$

# Code
```swift []
class Solution {
    func reconstructMatrix(_ upper: Int, _ lower: Int, _ colsum: [Int]) -> [[Int]] {
        // Time: O(N)
        // Space: O(N)
        var res = Array(repeating: Array(repeating: 0, count: colsum.count), count: 2)
        var upper = upper, lower = lower
        for i in 0..<colsum.count {
            if colsum[i] == 2 {
                res[0][i] = 1
                res[1][i] = 1
                upper -= 1
                lower -= 1
            } else if colsum[i] == 1 {
                if upper > lower {
                    res[0][i] = 1
                    upper -= 1
                } else {
                    res[1][i] = 1
                    lower -= 1
                }
            }
        }
        return (0 == upper && 0 == lower) ? res : []
    }
}
```