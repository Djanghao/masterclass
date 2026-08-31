# scala union-find/disjoint-set

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/5645755/](https://leetcode.com/problems/similar-string-groups/solutions/5645755/)

---

```scala
object Solution {
  import scala.util.chaining._
  import util.control.TailCalls._
  def numSimilarGroups(strs: Array[String]): Int =
    val djs = strs.indices.to(Array)
    def root0(i: Int): TailRec[Int] = if (i == djs(i)) done(i) else tailcall(root0(djs(i))).map{_.tap(djs(i) = _)}
    def root(i: Int): Int = root0(i).result
    def join(i: Int)(j: Int): Unit = root(i).tap(djs(root(j)) = _)
    for{
      i <- strs.indices.init
      j <- (i+1) until strs.length
      if i!=j && (strs(i) == strs(j) || (strs(i).iterator zip strs(j)).filterNot{case (a,b) => a==b}.to(LazyList).pipe{
        case (c1,c2) +: (d1,d2) +: t => (c1 == d2) && (c2 == d1) && t.isEmpty
        case _ => false
      })
    }{join(i)(j)}
    djs.iterator.map(root).distinct.length
}
```