# Kotiln | dfs, cache, bitmask, gcd

**Author:** SamoylenkoDmitry
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3522041/](https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3522041/)

---

#### Join me on Telegram
https://t.me/leetcode_daily_unstoppable/212
#### Problem TLDR
Max indexed-gcd-pair sum from 2n array; [3,4,6,8] -> 11 (1gcd(3,6) + 2gcd(4,8)) 
#### Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each `step` and remaining items, the result is always the same, so is memorizable. 

#### Approach
<!-- Describe your approach to solving the problem. -->
* search all possible combinations with DFS
* use `bitmask` to avoid double counting
* use an array for cache
#### Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^22^n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(2^n)$$
#### Code
```
    tailrec fun gcd(a: Int, b: Int): Int = if (b % a == 0) a else gcd(b % a, a)
    fun maxScore(nums: IntArray): Int {
        val n = nums.size / 2
        val cache = IntArray(1 shl nums.size) { -1 }
        fun dfs(step: Int, mask: Int): Int {
            if (step > n) return 0
            if (cache[mask] != -1) return cache[mask]
            var max = 0
            for (i in 0..nums.lastIndex) {
                val ibit = 1 shl i
                if (mask and ibit != 0) continue
                for (j in (i + 1)..nums.lastIndex) {
                    val jbit = 1 shl j
                    if (mask and jbit != 0) continue
                    val curr = step * gcd(nums[i], nums[j])
                    val next = dfs(step + 1, mask or ibit or jbit)
                    max = maxOf(max, curr + next)
                }
            }
            cache[mask] = max
            return max
        }
        return dfs(1, 0)
    }
```