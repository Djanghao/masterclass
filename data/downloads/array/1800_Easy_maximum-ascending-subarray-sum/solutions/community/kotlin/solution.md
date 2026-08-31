# simole solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/4961823/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/4961823/)

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
    fun maxAscendingSum(nums: IntArray): Int {
    var max: Int = nums[0]
    var sum: Int = nums[0]
    for (i in 1 until nums.size) {
        val cur = nums[i]
        if (cur <= nums[i - 1]) sum = 0
        sum += cur
        max = maxOf(max, sum)
    }
    return max
    }
}
```