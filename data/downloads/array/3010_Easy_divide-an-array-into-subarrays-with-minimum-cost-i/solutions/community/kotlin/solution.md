# Kotlin

**Author:** lnlndn
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4903729/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4903729/)

---

# Complexity
- Time complexity: $$O(n)$$ 
- Space complexity: $$O(1)$$ 

# Code
```
class Solution {
    fun minimumCost(nums: IntArray): Int {
        var min1 = 51  // as constraints set 1 <= nums[i] <= 50
        var min2 = 51
        for ((index, num) in nums.withIndex()) {
            when {
                index == 0 -> Unit
                num < min1 -> {
                    min2 = min1
                    min1 = num
                }
                num < min2 -> min2 = num
                else -> Unit
            }
        }
        return nums[0] + min1 + min2
    }
}
```