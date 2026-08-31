# DP || Pick/ Not Pick || O(n)

**Author:** Thiennk
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355126/](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355126/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(2*n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun maximumTotalCost(nums: IntArray): Long {
        if (nums.size == 1) return nums[0].toLong();
        if (nums.size == 2) {
            return maxOf(nums[0] + nums[1], nums[0] - nums[1]).toLong();
        }

        var a:  Array<LongArray> = Array(nums.size, {LongArray(2) {0}})
        a[0][0] = nums[0].toLong();
        a[1][0] = a[0][0] + nums[1];
        a[1][1] = a[0][0] - nums[1];

        for (i in 2 until nums.size) {
            a[i][0] = maxOf(a[i-1][0] + nums[i], a[i-1][1] + nums[i])
            a[i][1] = a[i-1][0] - nums[i];
        }

        return maxOf(a[nums.size-1][0], a[nums.size-1][1])
    }
}
```