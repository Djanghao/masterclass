# foldLeft

**Author:** xrtm000
**Votes:** 0
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/4944243/](https://leetcode.com/problems/hamming-distance/solutions/4944243/)

---

```
object Solution {
  def hammingDistance(x: Int, y: Int): Int = {
    val xb = x.toBinaryString
    val yb = y.toBinaryString
    val xb1 = "0" * (yb.length - xb.length).max(0) + xb
    val yb1 = "0" * (xb.length - yb.length).max(0) + yb
    xb1.zip(yb1).foldLeft(0) {
      case (total, (c1, c2)) => if (c1 != c2) total + 1 else total
    }
  }
}
```