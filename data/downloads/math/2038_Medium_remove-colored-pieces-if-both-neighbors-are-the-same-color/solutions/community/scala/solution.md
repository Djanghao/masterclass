# scala FP recursion with Seq.span

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/5231285/](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/5231285/)

---

```scala
// number of "inner" As should be greater than "inner" Bs
object Solution {
  def winnerOfGame(colors: String): Boolean = {
    def f(seq: Seq[Char], acc: (Int,Int)): (Int,Int) =
      lazy val (ta,da) = seq.span(_ == 'A')
      lazy val (tb,db) =  da.span(_ == 'B')
      if(seq.isEmpty) acc else f(db, (acc._1 + (ta.size-2 max 0), acc._2 + (tb.size-2 max 0)))
    lazy val x0 = f(colors.to(List), (0,0))
    x0._1 > x0._2
  }
}
```