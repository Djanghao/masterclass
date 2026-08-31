# :: Kotlin :: DP Solution

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/5036199/](https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/5036199/)

---

```
class Solution {
    fun sumOfPowers(nums: IntArray, k: Int): Int {
        val mod = 1_000_000_007
        val cache = HashMap<Pair< Pair<Int, Int>, Pair<Int, Int>>, Int>()
        val m = nums.size

        Arrays.sort(nums)
        fun dfs(index: Int, min: Int, prev: Int, n: Int): Int {
            if (n >= k) {
                return min
            }
            if (index >= m) return 0
            if (n + (m - index) < k) return 0

            val key = Pair(Pair(index, min), Pair(prev, n))
            if (cache.containsKey(key)) return cache.getOrDefault(key, 0)

            var result = 0
            result += dfs(index + 1, min, prev, n)
            result %= mod

            result += dfs(index + 1, if (prev != Int.MIN_VALUE) minOf(min, nums[index] - prev) else min, nums[index], n + 1)
            result %= mod

            cache.put(key, result)
            return result
        }

        return dfs(0, Int.MAX_VALUE, Int.MIN_VALUE, 0)
    }
}
```