# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5763340/](https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5763340/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
  def maxPossibleScore(start: Array[Int], d: Int): Int = {
    val n = start.size
    val sortedStart = start.sorted

    def check(sortedStart: Array[Int], mid: Long, index: Int, prev: Long): Boolean = {
      if (index == n) true
      else {
        val next = (prev + mid) max sortedStart(index)
        if (next > sortedStart(index) + d) false
        else check(sortedStart, mid, index + 1, next)
      }
    }

    def binarySearch(low: Long, hi: Long): Long = {
      if (low > hi) hi
      else {
        val mid = (low + hi) / 2
        if (check(sortedStart, mid, 1, sortedStart(0))) binarySearch(mid + 1, hi)
        else binarySearch(low, mid - 1)
      }
    }

    binarySearch(0L, sortedStart.last.toLong - sortedStart.head + d).toInt
  }
}
```