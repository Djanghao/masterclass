# Wanted To Share the Kotlin Version

**Author:** FastTurtle97
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/4604388/](https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/4604388/)

---


# Code
```
class Solution {
    fun countPairs(nums: IntArray, k: Int): Long {
        val map = HashMap<Long, Long>()
        var ans = 0L
        
        fun getGCD(a: Long, b: Long): Long {
            if (b == 0L)
                return a
            return getGCD(b, a % b)
        }
        
        for (i in nums.indices) {
            val gcd1 = getGCD(nums[i].toLong(), k.toLong())
            
            for (key in map.keys) {
                val gcd2 = key
                if ((gcd1 * gcd2) % k == 0L) {
                    ans += map[key] ?: 0L
                }
            }

            map[gcd1] = map.getOrDefault(gcd1, 0L) + 1
        }
        return ans
    }
}

```