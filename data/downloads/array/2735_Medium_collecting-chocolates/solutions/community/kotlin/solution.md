# Kotlin, $$O(n^2)$$

**Author:** zpei100
**Votes:** 1
**Link:** [https://leetcode.com/problems/collecting-chocolates/solutions/3797169/](https://leetcode.com/problems/collecting-chocolates/solutions/3797169/)

---

# Intuition
Performing an operation is the same as changing the price of the ith chocolate to the price of the i+1 ith chocolate.

For n chocolates, you can at most rotate the prices n - 1 times.

Simulate the n - 1 rotations while tracking of each chocolate's best purchase to easily compute the results of the next rotation (effectively dp, where dp[0] is the best prices after 0 rotation)

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- $$O(n^2)$$

# Code
```


class Solution {
    fun minCost(nums: IntArray, x: Int): Long {
        val purchasePrice = nums.map { it.toLong() }.toMutableList()
        var min = Long.MAX_VALUE
        for (operations in 0 until nums.size) {
            for (chocolate in nums.indices) {
                purchasePrice[chocolate] = minOf(purchasePrice[chocolate], nums[(chocolate+operations)%nums.size].toLong())
            }
            min = minOf(min, purchasePrice.sum().toLong() + operations * x.toLong())
        }
        return min
    }
}
```