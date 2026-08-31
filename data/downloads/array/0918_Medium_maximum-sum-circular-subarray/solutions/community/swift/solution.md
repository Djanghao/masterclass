# 🍎Swift solution – O(n) – Kadane's

**Author:** drxlx
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/4923140/](https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/4923140/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxSubarraySumCircular(_ nums: [Int]) -> Int {
        var globMax = nums[0]
        var globMin = nums[0]
        var curMax = 0
        var curMin = 0
        var total = 0

        for n in nums {
            curMax = max(curMax + n, n)
            curMin = min(curMin + n, n)
            total += n
            globMax = max(globMax, curMax)
            globMin = min(globMin, curMin)
        }
        
        if globMax > 0 {
            return max(globMax, total - globMin)
        } else {
            return globMax
        }
    }
}
```