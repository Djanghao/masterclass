# Scala LazyList

**Author:** fairgrieve
**Votes:** 5
**Link:** [https://leetcode.com/problems/super-ugly-number/solutions/807024/](https://leetcode.com/problems/super-ugly-number/solutions/807024/)

---

```
import scala.collection.SortedSet

object Solution {
  def nthSuperUglyNumber(n: Int, primes: Array[Int]): Int = {
    def f(ugly: SortedSet[Long]): LazyList[Long] = {
      ugly.head #:: f(ugly.tail ++ primes.map(_ * ugly.head))
    }
    f(SortedSet(1))(n - 1).toInt
  }
}
```