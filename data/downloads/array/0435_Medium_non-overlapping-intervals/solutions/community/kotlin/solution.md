# :: Kotlin :: Sort + Sliding Window Solution

**Author:** znxkznxk1030
**Votes:** 2
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/3787086/](https://leetcode.com/problems/non-overlapping-intervals/solutions/3787086/)

---


```
class Solution {
    fun eraseOverlapIntervals(intervals: Array<IntArray>): Int {
        if (intervals.size == 0) return 0

        var list = mutableListOf<Pair<Int, Int>>()

        for (interval in intervals) {
            list.add(Pair(interval[0], interval[1]))
        }

        var sorted = list.sortedWith(compareBy({it.first}, {it.second}))
        // sorted.forEach{ println("$it") }

        var left = sorted[0].second
        var result = 0
        for (i in 1 until sorted.size) {
            val right = sorted[i]

            if (right.first < left) {
                result += 1
                left = Math.min(left, right.second)
            } else {
                left = Math.max(left, right.second)
            }
        }

        return result
    }
}
```