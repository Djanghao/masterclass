# :: Kotlin :: Binary Search

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4789666/](https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4789666/)

---

# Code
```
class Solution {
    fun earliestSecondToMarkIndices(nums: IntArray, changeIndices: IntArray): Int {
        val n = nums.size
        val m = changeIndices.size
        val sum = nums.sum()!!

        for (i in 0 until m) {
            changeIndices[i] -= 1
        }

        fun isPossible(idx: Int): Boolean {
            val last = IntArray(n){ -1 }

            for (i in 0 .. idx) {
                val j = changeIndices[i]
                last[j] = i
            }

            var marked = 0
            var store = 0
            for (i in 0 .. idx) {
                val j = changeIndices[i]
                if (last[j] == i) {
                    if (store < nums[j]) return false
                    marked += 1
                    store -= nums[j]
                } else {
                    store += 1
                }
            }
            // println("${idx} ${marked == n}")
            return marked == n
        }

        var left = 0
        var right = m - 1

        while (left < right) {
            val mid = left + (right - left) / 2
            // println("${left} ${mid} ${right}")

            if (isPossible(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        if (left == m - 1 && isPossible(m - 1)) return m
        return if (left == m - 1) -1 else left + 1
    }
}
```