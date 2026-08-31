# 8 lines scala FP solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/5291986/](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/5291986/)

---

```scala
object Solution {
  def minSwaps(grid: Array[Array[Int]]): Int =
    lazy val x0 = grid.map(_.reverse.mkString).to(List)
    lazy val aMap = x0.map(s => s -> s.takeWhile(_ == '0').size).to(Map)
    lazy val canBeValid = x0.sorted.reverse.zipWithIndex
      .forall{case (s,i) => s.iterator.take(i).forall(_ == '0')}
    def g(seq1: Seq[String], step: Int, acc:Int): Int =
      lazy val (d,t) = seq1.span{ s => aMap(s) < step}
      if(step<=0) acc else g(d ++ t.drop(1), step-1, d.size+acc)
    if(!canBeValid) -1 else g(x0, grid.size-1, 0)
}
```