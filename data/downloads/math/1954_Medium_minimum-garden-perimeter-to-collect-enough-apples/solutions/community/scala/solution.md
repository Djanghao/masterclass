# scala binary search

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/5417909/](https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/5417909/)

---

```scala
object Solution {
  def minimumPerimeter(neededApples: Long): Long = 
    def check(l: Long): Boolean = ((l+1)*(l+1)*l-(l+1)*l/2)*4 < neededApples
    def bs(lo:Long, hi:Long):Long =
      lazy val mid = lo + (hi-lo)/2L
      if(hi-lo<=1) hi else if(check(mid)) bs(mid,hi) else bs(lo,mid)
    bs(0L,neededApples min 10000000)*8
}
```