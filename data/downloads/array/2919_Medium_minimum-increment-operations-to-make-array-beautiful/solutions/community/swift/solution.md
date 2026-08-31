# Swift Solution

**Author:** nikusingla
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4314864/](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4314864/)

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
    func minIncrementOperations(_ nums: [Int], _ k: Int) -> Int {
        var dp1 = 0, dp2 = 0, dp3 = 0, dp = 0
        for a in nums {
            dp = min(dp1,dp2,dp3) + max(k-a, 0)
            dp1 = dp2
            dp2 = dp3
            dp3 = dp
        }
        return min(dp1, dp2, dp3)
    }
}
```