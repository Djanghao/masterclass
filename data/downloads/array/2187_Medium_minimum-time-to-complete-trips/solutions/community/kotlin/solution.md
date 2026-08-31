# Kotlin | binary search

**Author:** SamoylenkoDmitry
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3267486/](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3267486/)

---

#### Join me on telergam
https://t.me/leetcode_daily_unstoppable/140
#### Intuition
Naive approach is just to simulate the `time` running, but given the problem range it is not possible.
However, observing the `time` simulation results, we can notice, that by each `given time` there is a certain `number of trips`. And `number of trips` growths continuously with the growth of the `time`. This is a perfect condition to do a binary search in a space of the `given time`. 
With `given time` we can calculate number of trips in a $$O(n)$$ complexity.

#### Approach
Do a binary search. For the `hi` value, we can peak a $$10^7$$ or just compute all the time it takes for every bus to trip.
For a more robust binary search:
* use inclusive `lo` and `hi`
* use inclusive check for the last case `lo == hi`
* compute the result on every step instead of computing it after the search
* always move the borders `mid + 1`, `mid - 1`

#### Complexity
- Time complexity:
$$O(nlog_2(m))$$, $$m$$ - is a time range
- Space complexity:
$$O(1)$$
#### Code
```
    fun minimumTime(time: IntArray, totalTrips: Int): Long {
        fun tripCount(timeGiven: Long): Long {
            var count = 0L
            for (t in time) count += timeGiven / t.toLong()
            return count
        }
        var lo = 0L
        var hi = time.asSequence().map { it.toLong() * totalTrips }.max()!!
        var minTime = hi
        while (lo <= hi) {
            val timeGiven = lo + (hi - lo) / 2
            val trips = tripCount(timeGiven)
            if (trips >= totalTrips) {
                minTime = minOf(minTime, timeGiven)
                hi = timeGiven - 1
            } else {
                lo = timeGiven + 1
            }
        }
        return minTime
    }
```