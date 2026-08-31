# 4 lines scala FP solution with more verbose variations

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5222156/](https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5222156/)

---

```scala
object Solution {
  def equalSubstring(s: String, t: String, maxCost: Int): Int =
    s.size - s.indices.foldLeft((maxCost,0)){case ((diff,lo),hi) =>
      lazy val (dLo,dHi) = ((s(lo) - t(lo)).abs, (s(hi) - t(hi)).abs)
      if(diff-dHi < 0) ((diff+dLo-dHi), (lo+1)) else ((diff-dHi), lo)
    }._2
}
```
```scala
object Solution1 {
  var DEBUG = false
  // DEBUG = true
  def equalSubstring(s: String, t: String, maxCost: Int): Int =
    lazy val x0 = s.indices.foldLeft((maxCost,0)){case ((diff,lo),hi) =>
      if(DEBUG) println(s"    ((diff,lo),hi)=(($diff,$lo),$hi) : dLo=$dLo : dHi=$dHi")
      if(DEBUG) println(s"        (diff-dHi) : $diff-$dHi=${diff-dHi}")
      lazy val dLo = (s(lo) - t(lo)).abs
      lazy val dHi = (s(hi) - t(hi)).abs
      if(diff-dHi < 0) ((diff+dLo-dHi), (lo+1))
      else ((diff-dHi), lo)
    }
    if(DEBUG) println(s"  x0=$x0")
    s.size - (x0._2)
}
```
```scala
object Solution0 {
  def equalSubstring(s: String, t: String, maxCost: Int): Int =
    lazy val pfx = (s.iterator zip t).map(_ - _).scanLeft(0)(_ + _.abs).to(List)
    def f(sseq: Iterable[Int], tseq: Iterable[Int]): Int =
      lazy val sseq1 =  if(tseq.head - sseq.head > maxCost) sseq.tail else sseq
      if(tseq.isEmpty) sseq.size else f(sseq1, tseq.tail)
    f(pfx,pfx)-1 max 0
}```