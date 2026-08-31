# Solution implemented in kotlin

**Author:** skvSumit
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/3843796/](https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/3843796/)

---

# KOTLIN SOLUTION
If you need reference code implementation in kotlin
# Code
```
class Solution {
    fun countCompleteSubarrays(nums: IntArray): Int {
        val count = nums.distinct().count()
        var st = 0
        var en = 0
        val map = mutableMapOf<Int, Int>()
        var ans = 0
        while (en < nums.count()) {
            map[nums[en]] = 1 + (map[nums[en]] ?: 0)
            while (st <= en && map.count() == count) {
                map[nums[st]] = (map[nums[st]] ?: 0) - 1
                if (map[nums[st]] == 0) map.remove(nums[st])
                st++
                ans += nums.count() - en
            }
            en++
        }
        return ans
    }
}


```