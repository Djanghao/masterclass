# :: Kotlin :: DP ( Skip Or Take )

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/4998305/](https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/4998305/)

---

# Code
```
class Solution {
    val MOD = 1_000_000_007

    fun sumOfPower(nums: IntArray, k: Int): Int {
        val n = nums.size
        val cache = HashMap<Triple<Int, Int, Int>, Int>()

        val powers = IntArray(101){1}
        for (i in 1 .. 100) {
            powers[i] = (powers[i - 1] * 2) % MOD
        }

        fun helper(index: Int, sum: Int, count: Int): Int{
            val key = Triple(index, sum, count)
            if (cache.containsKey(key)) return cache.getOrDefault(key, 0)

            if (sum == k) {
                return powers[n - count]
            }
            if (sum > k) return 0
            if (index == n) return 0
            var result = 0

            // take
            result += helper(index + 1, sum + nums[index], count + 1)
            result %= MOD

            // skip
            result += helper(index + 1, sum, count)
            result %= MOD

            cache.put(key, result)
            return result
        }

        return helper(0, 0, 0)
    }
}
```