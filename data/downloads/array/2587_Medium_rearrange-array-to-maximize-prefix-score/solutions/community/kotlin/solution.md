# Kotlin | Prefix sum and count | Simple solution

**Author:** etlowelo
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3290974/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3290974/)

---

# Approach
1. Sort an array
2. Create a prefix sum array and calculate prefix sum
3. Count prefix sums, which are greater than $$0$$

**Note: Since contraints are: $$1 \u2264 nums.length \u2264 10^5$$ and $$10^{-6} \u2264 nums[i] \u2264 10^6$$, the prefix sum array must be $$Long$$ typed, to prevent overflow.**

# Complexity
- Time complexity: $$O(n \u22C5  logn)$$
- Space complexity: $$O(n)$$

# Code
```
class Solution {
    fun maxScore(nums: IntArray): Int {
        nums.sortDescending()
        return LongArray(nums.size).apply {
            this[0] = nums[0].toLong()
            for (i in 1 until nums.size) {
                this[i] = this[i - 1] + nums[i]
            }
        }.let { prefixSum -> prefixSum.count { it > 0 } }
    }
}
```