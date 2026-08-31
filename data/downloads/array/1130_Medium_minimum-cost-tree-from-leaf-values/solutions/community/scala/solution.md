# scala solutions. monostack oneliner + dfs recursion with memoization

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/5786116/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/5786116/)

---

```scala [monostack]
object Solution {
  import scala.util.chaining._
  def mctFromLeafValues(arr: Array[Int]): Int =
    arr.iterator.foldLeft((List.empty[Int],0)){case ((stack,acc),a) =>
      stack.span(_ <= a).pipe{case (t,d) =>
        if(stack.isEmpty || a<stack.head) (a+:stack,acc)
        else (a +: d, acc + (t:+a).sliding(2,1).map(_.product).sum)
      }
    }.pipe{case (stack,acc) => 
      acc + stack.sliding(2,1).filter(_.size == 2).map(_.product).sum
    }
}
```
```scala [dfs recursion with memoization]
object Solution {
  import scala.util.chaining._
  def mctFromLeafValues(arr: Array[Int]): Int = {
    val cache = collection.mutable.Map.empty[(Int,Int),(Int,Int)]
    def dfs(lo: Int, hi: Int): (Int,Int) = cache.getOrElse((lo,hi), {
      if (hi - lo == 1) (0, arr(lo))
      else Iterator.range(lo+1, hi).map { case mid =>
        val (l,mxl) = dfs(lo,mid)
        val (r,mxr) = dfs(mid,hi)
        (l+r+mxl*mxr, mxl max mxr)
      }.minBy(_._1)
    }.tap(rc => cache.update((lo,hi),rc)) )
    dfs(0,arr.length)._1
  }
}
```