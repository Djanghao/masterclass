# Kotlin DP top down

**Author:** furmansd
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/4537079/](https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/4537079/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {

    private lateinit var nums: IntArray
    private lateinit var cache: Array<IntArray>

    fun maxSumDivThree(nums: IntArray): Int {
        cache = Array(nums.size) { IntArray(3) { -1 } }
        this.nums = nums

        return dp(0, 0)
    }

    private fun dp(i: Int, mod: Int): Int {
        if (i == nums.size - 1) return if ((nums[nums.size - 1] + mod) % 3 == 0) nums[nums.size - 1] else 0

        if (cache[i][mod] > -1) return cache[i][mod]

        var result = if ((nums[i] + mod) % 3 == 0) nums[i] else 0
        if (dp(i + 1, mod) > 0) {
            result = maxOf(result, dp(i + 1, mod))
        }
        if (dp(i + 1, (nums[i] + mod) % 3) > 0) {
            result = maxOf(result, nums[i] + dp(i + 1, (nums[i] + mod) % 3))
        } 

        cache[i][mod] = result

        return result
    }
}
```