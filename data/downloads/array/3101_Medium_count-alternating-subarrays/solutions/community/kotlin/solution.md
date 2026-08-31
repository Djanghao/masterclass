# 1st Kotlin Solution

**Author:** user3900B
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/4952648/](https://leetcode.com/problems/count-alternating-subarrays/solutions/4952648/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun countAlternatingSubarrays(nums: IntArray): Long {
        var result = 1L
        var size = 1

        for (i in 1..nums.size-1) {
            size = if (nums[i-1] == nums[i]) 1 else size + 1
            result += size
        }

        return result
    }
}
```