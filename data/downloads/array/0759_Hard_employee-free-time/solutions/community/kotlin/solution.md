# Easy Kotlin PriorityQueue solution (Beats 100%)

**Author:** tanjiro562
**Votes:** 1
**Link:** [https://leetcode.com/problems/employee-free-time/solutions/4570935/](https://leetcode.com/problems/employee-free-time/solutions/4570935/)

---

# Intuition
Similar to how we solve other merge intervals problems, the only challenge here was to sort by end time in cases where there multiple intervals with the same start time.

# Approach
All intervals from each employee are added to a priority queue (pq), which is ordered by their start times first followed by their end times for intervals who have the same start times.

Find Free Times: The algorithm processes intervals from the queue. If there's a gap between the end of the previous interval (prevEnd) and the start of the current one, it's added to the result as a free interval.

Update Previous End: Update prevEnd to the end of the current interval, ensuring it's the maximum seen so far.

# Complexity
- Time complexity: O(N log N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/*
 *	// Definition for an Interval.
 *	class Interval {
 *		var start:Int = 0
 *		var end:Int = 0
 *	
 *		constructor(_start:Int, _end:Int) {
 *			start = _start
 *			end = _end
 *		}
 *	}
 */

class Solution {
    fun employeeFreeTime(schedule: ArrayList<ArrayList<Interval>>): ArrayList<Interval> {
        // Sort by start time first, if same then sort by end time
        val pq = PriorityQueue(compareBy<Interval> { it.start }.thenBy { it.end })

        schedule.forEach { pq.addAll(it) }

        // start with the first interval's end time
        var prev = pq.poll().end 
        val result = arrayListOf<Interval>()

        while (pq.isNotEmpty()) {
            val current = pq.poll()
            if (current.start > prev) {
                result.add(Interval(prev, current.start))
            }
            prev = max(prev, current.end) // this is the important step
        }

        return result
    }
}
```