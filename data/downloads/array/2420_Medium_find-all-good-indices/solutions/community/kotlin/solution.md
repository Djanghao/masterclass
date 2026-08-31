# Kotlin Easy Prefix/Suffix Solution ✅

**Author:** Z3ROsum
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-all-good-indices/solutions/2620543/](https://leetcode.com/problems/find-all-good-indices/solutions/2620543/)

---

```
class Solution {
    fun goodIndices(nums: IntArray, k: Int): List<Int> {
        if (k.toLong() == Math.round(nums.size / 2.0)) return listOf()
        var streakD = Array<Int>(nums.size) { 0 }
        var streakI = Array<Int>(nums.size) { 0 }
        var curr = 0
        var prev = Integer.MAX_VALUE
        for (i in nums.indices) {
            if (nums[i] <= prev) curr++
            else curr = 1
            prev = nums[i]
            streakD[i] = curr
        }
        prev = 0
        curr = 0
        for (i in nums.size - 1 downTo 0) {
            if (nums[i] <= prev) curr++
            else curr = 1
            prev = nums[i]
            streakI[i] = curr
        }
        val result = mutableListOf<Int>()
        for (i in k until nums.size - k) {
            if (streakD[i - 1] >= k && streakI[i + 1] >= k) {
                result.add(i)
            }
        }
        return result
    }
}
```