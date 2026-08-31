# Kotlin Imperative Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/5540387/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/5540387/)

---

# Code
```
class Solution {
    fun findSubarrays(nums: IntArray): Boolean {
        val set = mutableSetOf<Int>()

        for (i in 0 until nums.size - 1) {
            val sum = nums.copyOfRange(i, i + 2).sum()
            if (set.contains(sum)) return true
            set.add(sum)
        }

        return false
    }
}
```