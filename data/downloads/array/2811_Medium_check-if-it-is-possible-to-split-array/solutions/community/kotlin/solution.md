# Kotlin - Solution: if (nums[idx] + nums[idx - 1] >= m) return true

**Author:** ZuG9x
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3978824/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3978824/)

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
    fun canSplitArray(nums: List<Int>, m: Int): Boolean {
        if (nums.size <= 2) return true
        for (idx in 1..nums.lastIndex) {
            if (nums[idx] + nums[idx - 1] >= m) return true
        }
        return false
    }
}
```