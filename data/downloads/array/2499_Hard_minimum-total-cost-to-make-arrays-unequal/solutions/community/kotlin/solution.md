# Best Kotlin Solution

**Author:** Egermeisterrr
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/2924968/](https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/2924968/)

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
    fun minimumTotalCost(nums1: IntArray, nums2: IntArray): Long {
        var cost: Long = 0
        val count = IntArray(nums1.size + 1)
        var sum = 0
        for (i in nums1.indices) {
            if (nums1[i] == nums2[i]) {
                count[nums1[i]]++
                sum++
                cost += i.toLong()
            }
        }
        var rem = -1
        var freq = 0
        for (i in 0..nums1.size) {
            if (count[i] > (sum / 2)) {
                rem = i
                freq = count[i] - (sum - count[i])
                break
            }
        }
        if (rem == -1) {
            return cost
        }
        for (i in nums1.indices) {
            if ((nums1[i] != nums2[i]) && (rem != nums2[i]) && (rem != nums1[i])) {
                cost += i.toLong()
                freq--
            }
            if (freq == 0) {
                break
            }
        }
        return if (freq != 0) -1 else cost
    }
}
```