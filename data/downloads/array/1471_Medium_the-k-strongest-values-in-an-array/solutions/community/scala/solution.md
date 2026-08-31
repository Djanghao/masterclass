# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/5555643/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/5555643/)

---

```scala
object Solution {
  def getStrongest(arr: Array[Int], k: Int): Array[Int] =
    lazy val m = arr.sorted.apply((arr.length-1)/2)
    arr.map(a => ((a-m).abs,a)).sorted.reverse
    .take(k).map(_._2)
}
```