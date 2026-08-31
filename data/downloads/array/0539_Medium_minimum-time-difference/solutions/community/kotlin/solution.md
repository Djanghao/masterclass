# Kotlin. Beats 100% (163 ms). PQ solution.

**Author:** mobdev778
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/5793752/](https://leetcode.com/problems/minimum-time-difference/solutions/5793752/)

---

![{12F64003-1487-4EA9-9DCC-3BAC485EC012}.png](./images/0.png)

```
class Solution {
    fun findMinDifference(timePoints: List<String>): Int {
        val sortedMins = PriorityQueue<Int>()

        for (time in timePoints) {
            sortedMins.offer(convert(time))
        }
        sortedMins.offer(sortedMins.peek() + 24 * 60)

        var minDiff = Int.MAX_VALUE / 2
        var last = Int.MIN_VALUE / 2
        while (sortedMins.isNotEmpty()) {
            val diff = sortedMins.poll() - last
            last += diff
            minDiff = Math.min(minDiff, diff)
            if (minDiff == 0) break
        }
        return minDiff
    }

    private fun convert(time: String): Int {
        return (time[0] - '0') * 600 + (time[1] - '0') * 60 + (time[3] - '0') * 10 + (time[4] - '0')
    }
}
```

# Alternative approaches

1. TreeSet solution

![{1B10E5BD-2A4D-404F-BFB4-DCD1EBAC21D3}.png](./images/1.png)

```kotlin []
class Solution {
    fun findMinDifference(timePoints: List<String>): Int {
        val sortedMins = TreeSet<Int>()

        for (time in timePoints) {
            val mins = convert(time)
            if (!sortedMins.add(mins)) return 0
        }

        var minDiff = Int.MAX_VALUE / 2
        var last = Int.MIN_VALUE / 2
        for (mm in sortedMins) {
            minDiff = Math.min(minDiff, mm - last)
            last = mm
        }
        return Math.min(minDiff, sortedMins.first() + 24 * 60 - sortedMins.last())
    }

    private fun convert(time: String): Int {
        return (time[0] - '0') * 600 + (time[1] - '0') * 60 + (time[3] - '0') * 10 + (time[4] - '0')
    }
}
```

2. TreeSet solution + additional "min" element in the tree.

![{414CCC7C-1633-4C02-909C-51BDFB48D937}.png](./images/2.png)

```
class Solution {
    fun findMinDifference(timePoints: List<String>): Int {
        val sortedMins = TreeSet<Int>()

        for (time in timePoints) {
            val mins = convert(time)
            if (!sortedMins.add(mins)) return 0
        }
        sortedMins.add(sortedMins.first() + 24 * 60)

        var minDiff = Int.MAX_VALUE / 2
        var last = Int.MIN_VALUE / 2
        for (mm in sortedMins) {
            minDiff = Math.min(minDiff, mm - last)
            last = mm
        }
        return minDiff
    }

    private fun convert(time: String): Int {
        return (time[0] - '0') * 600 + (time[1] - '0') * 60 + (time[3] - '0') * 10 + (time[4] - '0')
    }
}
```

3. One more attempt:

![{F2DB0155-065C-4A6C-A4E1-1891FE68DF3E}.png](./images/3.png)

```
class Solution {
    fun findMinDifference(timePoints: List<String>): Int {
        val sortedMins = TreeSet<Int>()

        for (time in timePoints) {
            val mins = convert(time)
            if (!sortedMins.add(mins)) return 0
        }
        sortedMins.add(sortedMins.first() + 24 * 60)

        var minDiff = Int.MAX_VALUE / 2
        var last = Int.MIN_VALUE / 2
        for (mm in sortedMins) {
            minDiff = Math.min(minDiff, mm - last)
            last = mm
        }
        return minDiff
    }

    inline fun convert(time: String): Int {
        var result = 0
        for (i in 0 until MULT.size) {
            result += (time[i] - '0') * MULT[i]
        }
        return result
    }

    companion object {
        val MULT = intArrayOf(600, 60, 0, 10, 1)
    }
}
```