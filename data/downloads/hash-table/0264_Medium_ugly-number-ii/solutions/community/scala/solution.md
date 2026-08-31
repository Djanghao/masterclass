# Scala LazyList

**Author:** fairgrieve
**Votes:** 2
**Link:** [https://leetcode.com/problems/ugly-number-ii/solutions/807008/](https://leetcode.com/problems/ugly-number-ii/solutions/807008/)

---

```
import scala.collection.SortedSet

object Solution {
  private val UglyNumbers = {
    def f(ugly: SortedSet[Long]): LazyList[Long] = {
      ugly.head #:: f(ugly.tail ++ Set(2, 3, 5).map(_ * ugly.head))
    }
    f(SortedSet(1))
  }

  def nthUglyNumber(n: Int): Int = UglyNumbers(n - 1).toInt
}
```