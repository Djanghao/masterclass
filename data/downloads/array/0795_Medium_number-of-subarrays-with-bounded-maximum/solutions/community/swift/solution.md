# swift - solution

**Author:** Zhanadilll
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/4392067/](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/4392067/)

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
    func numSubarrayBoundedMax(_ nums: [Int], _ left: Int, _ right: Int) -> Int {
        var l = -1
        var r = -1
        var count = 0
        for i in 0..<nums.count {
            if nums[i] > right {
                l = i
            }
            if nums[i] >= left {
                r = i
            }
            count += r - l
        }

        return count
    }
}
```