# DP cache Solution

**Author:** rajanmaheshwari1990
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/4119993/](https://leetcode.com/problems/longest-repeating-substring/solutions/4119993/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n ^ 2)$$

- Space complexity:
$$O(n ^ 2)$$

# Code
```
class Solution {
    func longestRepeatingSubstring(_ s: String) -> Int {
        let s = Array(s)
        var cache = Array(repeating: Array(repeating: 0, count: s.count), count: s.count)
        var res = 0

        for i in 0..<s.count - 1 {
            for j in (i+1)..<s.count {
                var count = 0
                if i == 0 {
                    count = String(s[i]) == String(s[j]) ? 1 : 0
                } else {
                    count = String(s[i]) == String(s[j]) ? ((cache[i - 1][j - 1]) + 1) : 0
                }
                res = max(res, count)
                cache[i][j] = count
            }
        }
        return res
    }
}
```