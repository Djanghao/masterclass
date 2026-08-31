# [scala] neat TreeMap solution

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-integers-in-intervals/solutions/2060927/](https://leetcode.com/problems/count-integers-in-intervals/solutions/2060927/)

---

```scala

class CountIntervals() {

  val iMap = scala.collection.mutable.TreeMap.empty[Int, Int]

  var cnt = 0

  def add(left: Int, right: Int) {
    val leftInterval = iMap.maxBefore(left).filter(_._2 >= left)
    val rightIntervals = iMap.range(left, right + 1)
    val nLeft = leftInterval.map(_._1).getOrElse(left)
    val nRight = List(Some(right), leftInterval.map(_._2), rightIntervals.lastOption.map(_._2)).flatten.max
    (leftInterval ++ rightIntervals).foreach { case(l, r) =>
      iMap.remove(l)
      cnt -= distance(l, r)
    }
    iMap(nLeft) = nRight
    cnt += distance(nLeft, nRight)
  }

  def count(): Int = cnt

  def distance(left: Int, right: Int) = right - left + 1
}
```