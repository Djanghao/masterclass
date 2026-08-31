# Simple Kotlin Solution | O(N log N) | Intervals | Heap

**Author:** avlomakin
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/solutions/4984467/](https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/solutions/4984467/)

---

# Intuition
This is basically Meeting Rooms II, but with half-open intervals. The idea is to prepare intervals, sort by start and calculate the max intersection using heap. We represent interval $$[a,b)$$ as $$[2a, 2b\xB11]$$ to simulate half-open nature 

# Complexity
- Time complexity:$$O(N logN)$$, N - number of intervals (dots - 1)
- Space complexity:$$O(N)$$

# Code
```
class Solution {
    fun maxIntersectionCount(y: IntArray): Int {
        val intervals = ArrayList<IntArray>()
        for(i in 1..<y.size) {
            val start = 2 *  y[i - 1]
            var end = 2 * y[i]
            if(i != y.size -1 ) {
                if(start > end) end++ else end--
            }
            intervals.add(intArrayOf(min(start, end), max(start, end)))
        }
        intervals.sortBy {it[0]}


        var maxIntersections = 0
        var ends = PriorityQueue<Int>()
        for (interval in intervals) {
            val start = interval[0]
            val end = interval[1]
            while(ends.size > 0 && ends.peek() < start) {
                ends.poll()
            }
            ends.add(end)
            if(maxIntersections < ends.size) maxIntersections = ends.size
        }
        return maxIntersections
    }
}
```