# simple scala ordering solution

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/5834470/](https://leetcode.com/problems/remove-covered-intervals/solutions/5834470/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlogn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```scala []
object Solution {
  def removeCoveredIntervals(intervals: Array[Array[Int]]): Int = {
    implicit val ordering:Ordering[Array[Int]]=Ordering
      .by[Array[Int],Int](_.head).orElseBy(-_.last)
    val sorted = intervals.sorted(ordering)
    sorted.tail.foldLeft(Array[Array[Int]](sorted.head)) {
      case (result, current) =>
        if (result.isEmpty || !isCovered(result.last, current)) result :+ current
        else result
    }.length
  }

  private def isCovered(first: Array[Int], last: Array[Int]): Boolean = {
    first.head <= last.head && first.last >= last.last
  }
}
```