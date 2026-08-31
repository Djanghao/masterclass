# Kotlin O(n) using Monotonic Stack

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-min-product/solutions/3464657/](https://leetcode.com/problems/maximum-subarray-min-product/solutions/3464657/)

---

# Intuition & Approach
Solution is similar to [problen 84](https://leetcode.com/problems/largest-rectangle-in-histogram/) but much harder. For a very good explanation please check [this](https://leetcode.com/problems/maximum-subarray-min-product/solutions/1198896/o-n-monostack-with-picture/?orderBy=most_votes), much better than I can explain..

# Code
```
class Solution {
    fun maxSumMinProduct(nums: IntArray): Int {
        val prefix = LongArray(nums.size + 1)
        val stack = ArrayDeque<Pair<Int, Long>>()
        val mod = 1000000007L
        
        for (i in nums.indices) {
            prefix[i + 1] = prefix[i] + nums[i]
        }

        var res = 0L
        for ((i, n) in nums.withIndex()) {
            var start = i

            while (stack.isNotEmpty() && stack.peekLast().second > n) {
                val (lastStart, value) = stack.removeLast()
                val total = prefix[i] - prefix[lastStart]
                res = maxOf(res, total * value)
                start = lastStart
            }

            stack.addLast(start to n.toLong())
        }
        
        for ((start, value) in stack) {
            val total = prefix[nums.size] - prefix[start]
            res = maxOf(res, total * value)
        }


        return (res % mod).toInt()
    }
}
```