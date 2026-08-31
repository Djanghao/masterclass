# scala oneliner

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4435329/](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4435329/)

---

```
object Solution {
  def maxWidthOfVerticalArea(points: Array[Array[Int]]): Int =
    points.map(_(0)).sorted.sliding(2,1).map(x => x.last - x.head).max
}
```