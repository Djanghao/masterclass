# [Beats 100% runtime] Kotlin O(n) One pass

**Author:** brentlikestocode
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-decreasing-array/solutions/5374887/](https://leetcode.com/problems/non-decreasing-array/solutions/5374887/)

---

# Intuition
1. When `nums[i] > nums[i + 1]` is true: We've found a violation of the non-decreasing order.

2. Check if `modification` exceeds 1: If more than one `modification` is needed, return false.

Condition `i == 0 || nums[i - 1] <= nums[i + 1]`:
- `i == 0`: No previous element, so safe to modify nums[i].
- `nums[i - 1] <= nums[i + 1]`: Ensures modifying nums[i] will not cause a new violation with the previous element.

Else Case: Modify nums[i + 1] to nums[i] if modifying nums[i] is not safe.
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
    fun checkPossibility(nums: IntArray): Boolean {
        if(nums.size <= 1) return true

        var modifications = 0

        for(i in 0 until nums.size - 1) {
            if(nums[i] > nums[i + 1]) {
                if(modifications == 1) return false

                modifications ++

                if(i == 0 || nums[i - 1] <= nums[i + 1]) {
                    nums[i] = nums[i + 1]
                } else {
                    nums[i + 1] = nums[i]
                }
            }
        }

        return true
    }
}
```