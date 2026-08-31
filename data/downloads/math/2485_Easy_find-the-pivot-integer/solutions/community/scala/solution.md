# Scala easy math solution with comments

**Author:** DecisiveVictory
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-pivot-integer/solutions/4867568/](https://leetcode.com/problems/find-the-pivot-integer/solutions/4867568/)

---

# Code
```
import scala.math.sqrt

object Solution {
  // S(x) == S(n) - S(x - 1)
  // S(m) == (n * (n + 1)) / 2   (Arithmetic progression)
  // (x * (x + 1)) == (n * (n + 1)) - ((x - 1) * x)
  // x^2 == (n * (n + 1)) / 2
  def pivotInteger(n: Int): Int = {
    val xSquared = (n * (n + 1)) / 2
    val x = sqrt(xSquared.toFloat).toInt
    if (x * x == xSquared) {
      x
    } else {
      -1
    }
  }
}
```