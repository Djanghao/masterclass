# Kotlin. Compact solution.

**Author:** ramanchik
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4515901/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4515901/)

---

# Code
```
class Solution {
    fun jobScheduling(startTime: IntArray, endTime: IntArray, profit: IntArray): Int = TreeMap<Int, Int>().apply { 
        put(0, 0) 
        endTime.indices.sortedBy { endTime[it] }.forEach { i ->
            (profit[i] + floorEntry(startTime[i]).value).let {
                if(it > lastEntry().value) this[endTime[i]] = it
            }
        }
    }.lastEntry().value
}
```