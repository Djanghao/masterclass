# scala dp recursion with memoization

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/soup-servings/solutions/3835770/](https://leetcode.com/problems/soup-servings/solutions/3835770/)

---

```
object Solution {
  import scala.util.chaining._
  import scala.language.implicitConversions
  def soupServings(n: Int): Double = {
    val cache = collection.mutable.Map.empty[(Int,Int),Double]
    def impl(a: Int, b: Int): Double =
      if (a<=0 && b<=0) 0.5
      else if(a<=0) 1.0
      else if(b<=0) 0.0
      else if(cache.contains((a,b))) cache((a,b))
      else (0.25 * (impl(a - 100, b) + impl(a - 75, b - 25) + impl(a - 50, b - 50) + impl(a - 25, b - 75)))
        .tap(rc => cache.addOne((a,b) -> rc))
    if(n >= 4800) 1.0 else impl(n,n)
  }
}
```