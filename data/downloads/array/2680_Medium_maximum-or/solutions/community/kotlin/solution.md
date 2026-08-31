# Kotlin O(n) using prefix + suffix (explanation)

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-or/solutions/3527061/](https://leetcode.com/problems/maximum-or/solutions/3527061/)

---

# Approach
We don't need to check all possibilities, for example trying to double different numbers differerent times etc. We can observe that the max value we can get is by shifting any `nums[i]` by `k` times and taking the ***bitwise or*** with all the numbers ***left*** and ***right*** to it.

We can precompute the suffix bitwise or values for each index, and have a running prefix bitwise or sum, to make our code faster & simpler.

We then just have to do one traversal to compute the max value.


- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    fun maximumOr(nums: IntArray, k: Int): Long {
        var suffix = IntArray(nums.size).apply {
            for (i in nums.lastIndex - 1 downTo 0)
                this[i] = this[i + 1] or nums[i + 1]
        }

        var prefix = 0L
        var max = 0L
        for (i in 0..nums.lastIndex) {
            val num = nums[i].toLong()
            max = maxOf(
                max,
                prefix or (num shl k) or suffix[i].toLong()
            )
            prefix = prefix or num
        }

        return max
    }
}
```