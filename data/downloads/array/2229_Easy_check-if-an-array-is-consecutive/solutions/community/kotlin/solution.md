# sort and iterate

**Author:** ckp_idolol
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/5666039/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/5666039/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
sort and iterate

# Approach
<!-- Describe your approach to solving the problem. -->
- sort array in place (O(nlogn) but no additional space)
- iterate once to check if current value is greater than previous by 1
- if index 0 we simply return true as we dont bother with this check

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ --> O(nlogn)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1)

# Code
```kotlin []
class Solution {
    fun isConsecutive(nums: IntArray): Boolean {
        nums.sort()
        return nums.withIndex().all{(index,_) -> if(index>0) nums[index] == nums[index - 1] + 1 else true}
    }
}
```