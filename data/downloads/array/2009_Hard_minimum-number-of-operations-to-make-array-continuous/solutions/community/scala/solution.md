# [Scala] Functional solution using sliding window & foldLeft

**Author:** cosminci
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/1476962/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/1476962/)

---

This is a pretty concise & readable Scala version for the sliding window solution explained in the more popular discussion threads. 

A quick exit condition `if (newEnd == m) return math.min(min, swapsNeeded)` can be added inside the fold loop, but doesn't seem to provide any noticeable runtime benefit for the test cases executed at the time of this writing.
```
  def minOperations(nums: Array[Int]): Int = {
    val unique = nums.distinct.sorted
    val (n, m) = (nums.length, unique.length)

    (0 until m).foldLeft(n, 0) {
      case ((min, end), start) =>
        val newEnd = (end until m).find(i => unique(i) >= unique(start) + n).getOrElse(m)
        val alreadyInWindow = newEnd - start
        val swapsNeeded = n - alreadyInWindow
        (math.min(min, swapsNeeded), newEnd)
    }._1
  }
```