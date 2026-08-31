# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2043078/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2043078/)

---

```
object Solution {
  def maxConsecutive(bottom: Int, top: Int, special: Array[Int]): Int = {
    special.sortInPlace
    Iterator(bottom)
      .concat(special.iterator.map(_ + 1))
      .zip(special.iterator.concat(Iterator(top + 1)))
      .map { case (from, until) => until - from }
      .maxOption
      .getOrElse(0)
  }
}
```