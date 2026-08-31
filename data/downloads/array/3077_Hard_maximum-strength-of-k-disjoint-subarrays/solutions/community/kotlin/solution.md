# :: Kotlin :: DP & Recurisive

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/5011445/](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/5011445/)

---

# Code
```
class Solution {
    fun maximumStrength(nums: IntArray, k: Int): Long {
        val n = nums.size
        val cache = HashMap<Pair<Int, Int>, Long>()

        fun helper(idx: Int, d: Int): Long{
            if (d > k) return 0L
            if (idx >= n) return Long.MIN_VALUE
            if (n - idx < k - d) return Long.MIN_VALUE

            val key = Pair(idx, d)
            if (cache.containsKey(key)) return cache.getOrDefault(key, Long.MIN_VALUE)

            var result = Long.MIN_VALUE

            var num = nums[idx].toLong()
            var prod = (k - d + 1).toLong()
            var signed = if (d % 2 == 1) 1 else -1

            val skip = helper(idx + 1, d)
            val take = helper(idx + 1, d + 1)

            if (take > Long.MIN_VALUE) {
                result = maxOf(result, take + (num * prod * signed))
            }

            if (skip > Long.MIN_VALUE) {
                result = maxOf(result, skip + (num * prod * signed))
            }

            cache.put(key, result)
            return result
        }

        var result = Long.MIN_VALUE

        for (i in 0 until n) {
            result = maxOf(result, helper(i, 1))
        }

        return result
    }
}
```