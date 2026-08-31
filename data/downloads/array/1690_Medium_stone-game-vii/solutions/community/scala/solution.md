# scala recursion memoization dp

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vii/solutions/1588827/](https://leetcode.com/problems/stone-game-vii/solutions/1588827/)

---

```scala
object Solution {
  import scala.util.chaining._
  import scala.language.implicitConversions
  case class IdxRange(lo:Int,hi:Int) {
    def head = lo
    def tail = copy(lo=lo+1)
    def init = copy(hi=hi-1)
    def last = hi-1
  }
  def stoneGameVII(stones: Array[Int]): Int = {
    val stonesSum = stones.sum
    val cache = collection.mutable.Map.empty[(Int, IdxRange, Boolean),Int]
    def dp(stonesSum: Int, idxRange: IdxRange, aliceStarts: Boolean): Int = {
      lazy val k = (stonesSum, idxRange, aliceStarts)
      cache.get(k) match {
        case Some(x) => x
        case None    => dpImpl(stonesSum, idxRange, aliceStarts)
          .tap(v=>cache.addOne(k->v))
      }
    }
    def dpImpl(stonesSum: Int, idxRange: IdxRange, aliceStarts: Boolean): Int = {
      lazy val seqTail = idxRange.tail
      lazy val seqInit = idxRange.init
      lazy val seqTailSum:Int = stonesSum-stones(idxRange.head)
      lazy val seqInitSum:Int = stonesSum-stones(idxRange.last)

      if(idxRange.hi-idxRange.lo <=1) 0
      else if (aliceStarts) {            
        (dp(seqTailSum, seqTail,!aliceStarts) + seqTailSum) max
        (dp(seqInitSum,seqInit,!aliceStarts) + seqInitSum)
      } else {
        (dp(seqTailSum,seqTail,!aliceStarts) - seqTailSum) min
        (dp(seqInitSum,seqInit,!aliceStarts) - seqInitSum)
      }
      //.tap(ans=>println(s"ans=$ans: dp($stonesSum, $idxRange, $aliceStarts)"))
    }
    dp(stonesSum,IdxRange(0,stones.size),true)
  }
}
```