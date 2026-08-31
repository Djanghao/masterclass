# Scala functional solution

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/3622490/](https://leetcode.com/problems/meeting-scheduler/solutions/3622490/)

---

# Intuition
TBA

# Approach
Since there is no overlapping in schedule for each person merge all them together sorted by start time desc. Now look for the first possible intersection that satisfies the duration condition

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
object Solution {
    def minAvailableDuration(slots1: Array[Array[Int]], slots2: Array[Array[Int]], duration: Int): List[Int] = {
        // merge all intervals and sort them by start
        val freeIntervals = List(slots1, slots2).flatten.sortWith {
            case (Array(start1,end1), Array(start2,end2)) => start1 < start2
        }
        // find the first possible intersection
        freeIntervals.foldLeft(-1) {
            case (lastEnd, Array(start, end)) if start < lastEnd && (lastEnd min end) - start >= duration =>
                return List(start, start + duration)
            case (lastEnd, Array(start, end)) => end max lastEnd

        }
        List()
    }
}
```