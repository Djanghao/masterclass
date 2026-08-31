# 4 lines of scala with span and fold

**Author:** vititov
**Votes:** 7
**Link:** [https://leetcode.com/problems/insert-interval/solutions/1594848/](https://leetcode.com/problems/insert-interval/solutions/1594848/)

---

```scala
  def insert(intervals: Array[Array[Int]], newInterval: Array[Int]): Array[Array[Int]] = {
    lazy val (begin,next) = intervals.span(_ (1) < newInterval(0))
    lazy val (mid,end) = next.span(_ (0) <= newInterval(1))
    lazy val im = mid.foldLeft(newInterval){case (Array(a1,a2),Array(i1,i2)) => Array(a1 min i1, a2 max i2)}
    begin ++ Array(im) ++ end
  }
```