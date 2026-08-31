# scala dp

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/6076551/](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/6076551/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def numberOfPaths(grid: Array[Array[Int]], k: Int): Int = {
    var List(dp,pd)=List(0,0).map(_ => Array.fill(grid.head.length+1,k)(0L))
    dp(1)(0)=1
    for {
      r <- Iterator.range(0,grid.length)
      _ = {val tmp = pd; pd = dp; dp = tmp}
      c <- Iterator.range(0, grid.head.length)
      rem = grid(r)(c) % k
      j <- Iterator.range(0,k)
      i1 = (j-rem+k)%k
    } {dp(c+1)(j) = (dp(c)(i1) + pd(c+1)(i1)) % 1_000_000_007}
    dp.last.head.toInt
  }
}
```