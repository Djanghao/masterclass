# Kotlin using sort

**Author:** aymaletdinov2012
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/5695815/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/5695815/)

---

# Complexity
- Time complexity:
o(n log n)

- Space complexity:
O(1)

# Code
```kotlin []
class Solution {

    fun minimumTime(jobs: IntArray, workers: IntArray): Int {
        jobs.sort()
        workers.sort()

        var maxDays = 1.0f
        for (i in 0..jobs.lastIndex) {
            val days = jobs[i].toFloat() / workers[i]
            maxDays = maxOf(maxDays, days)
        }

        return ceil(maxDays).toInt()
    }
}
```