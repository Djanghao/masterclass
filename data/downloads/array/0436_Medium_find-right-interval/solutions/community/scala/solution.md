# Compact Scala solution

**Author:** tumakha
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-right-interval/solutions/815379/](https://leetcode.com/problems/find-right-interval/solutions/815379/)

---

```scala
  def findRightInterval(intervals: Array[Array[Int]]): Array[Int] = {
    val (startPoints, indices) = intervals.map(_(0)).zipWithIndex.sortBy(_._1).unzip

    intervals.map(interval => {
      val index = startPoints.search(interval(1)).insertionPoint
      if (index == intervals.length) -1 else indices(index)
    })
  }
```