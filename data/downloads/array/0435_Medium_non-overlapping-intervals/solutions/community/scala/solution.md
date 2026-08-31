# Idiomatic functional Scala solution

**Author:** acamillo
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/6031169/](https://leetcode.com/problems/non-overlapping-intervals/solutions/6031169/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It is a solution to Interval Scheduling problem.


# Approach
<!-- Describe your approach to solving the problem. -->
See here: https://en.wikipedia.org/wiki/Interval_scheduling#Interval_Scheduling_Maximization

# Complexity
- Time complexity: O(N log N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    def eraseOverlapIntervals(intervals: Array[Array[Int]]): Int = {
        val sorted = intervals.sortBy(_.apply(0))

        sorted.tail.foldLeft[(Int,Int)]((sorted(0)(1), 0)) { case ((prevEnd, cMin), i) =>
            if (i(0) < prevEnd) (prevEnd min i(1), cMin + 1) else (i(1), cMin)
        }._2
    }
}
```