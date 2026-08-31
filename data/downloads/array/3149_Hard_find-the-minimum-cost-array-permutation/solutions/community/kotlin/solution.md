# :: Kotlin :: DP + Tracking

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5219845/](https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5219845/)

---

https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5146002/dp-with-tracking

# Code
```
class Solution {
    fun findPermutation(nums: IntArray): IntArray {
        val n = nums.size

        val dp = Array(n){ IntArray(1 shl n){ Int.MAX_VALUE }}
        val track = Array(n){ IntArray(1 shl n){ 0 }}

        fun dfs(mask: Int, prev: Int): Int {
            if(mask.countOneBits() == n) {
                return Math.abs(prev - nums[0])
            }

            if (dp[prev][mask] < Int.MAX_VALUE) return dp[prev][mask]

            for (i in 0 until n) {
                if (mask and (1 shl i) > 0) continue

                val temp = Math.abs(prev - nums[i]) + dfs(mask or (1 shl i), i)
                if (temp < dp[prev][mask]) {
                    dp[prev][mask] = temp
                    track[prev][mask] = i
                }
            }

            return dp[prev][mask]
        }

        val result = mutableListOf<Int>()

        dfs(1, 0)
        result.add(0)

        var mask = 1
        while (mask.countOneBits() < n) {
            result.add(track[result.last()][mask])
            mask = mask or (1 shl result.last())
        }

        return result.toIntArray()
    }
}
```