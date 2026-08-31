# Simple Kotlin Solution with explanation

**Author:** coderiff
**Votes:** 6
**Link:** [https://leetcode.com/problems/merge-intervals/solutions/1846983/](https://leetcode.com/problems/merge-intervals/solutions/1846983/)

---

Here is a simple Kotlin solution.
The logic is simple.
1. Sort the intervals using the start value (O(NlogN))
2. Loop through the array of intervals (O(N))
3. Given an interval, 
   1) no overlap case - if the start value is greater than end value of the last `result` interval then add the interval to `result `
   2) overlap case -  just get the Max end value of a) last `result` interval or b) the current interval (this covers edge case where current interval falls within the last `result` interval)

* checking result is empty is a special case for 1) no overlap

```kotlin
fun mergeIntervals2(intervals: Array<IntArray>): Array<IntArray> {
        intervals.sortBy{ it[0] }
        val result = mutableListOf<IntArray>()
        intervals.forEach{
            if(result.isEmpty() || result.last()[1] < it[0]) {
                result.add(it)
            } else {
                result.last()[1] = maxOf(result.last()[1], it[1])
            }
        }
        return result.toTypedArray()
    }
```