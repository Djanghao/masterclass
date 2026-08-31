# scala recursion with memoization

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/strange-printer/solutions/5670830/](https://leetcode.com/problems/strange-printer/solutions/5670830/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def strangePrinter(s: String): Int = {
    val cache = collection.mutable.Map.empty[(Int,Int),Int]
    val vec = Vector(s(0)) ++ s.toList.sliding(2,1)
      .collect{case l if l.last != l.head => l.last}
    def f(lo: Int, hi:Int): Int = 
      if(lo>hi) 0 else { cache.getOrElse((lo,hi),
        ((1+f(lo+1,hi)) min
          (lo+1 to hi).filter(vec(_) == vec(lo))
            .map{mid => f(lo,mid-1) + f(mid+1,hi)}
            .minOption.getOrElse(Int.MaxValue)
          ).tap(rc => cache += (lo,hi) -> rc))}
    f(0,vec.length-1)
  }
}
```