# 12 lines scala bfs recursion

**Author:** vititov
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/5023548/](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/5023548/)

---

```
object Solution {
  import collection.immutable.{TreeMap,TreeSet}
  def minimumTime(grid: Array[Array[Int]]): Int = {
    def f(q:Set[(Int,(Int,Int))], v:Map[(Int,Int),Int]): Int = {
      lazy val ((t0:Int,(x0:Int,y0:Int)),t) = (q.head, q.tail)
      lazy val aa = List((x0-1)->y0, x0->(y0+1), x0->(y0-1), (x0+1)->y0)
        .collect{case (x:Int,y:Int) if x>=0 && y>=0 && x < grid.size && y < grid.head.size =>
          lazy val tm = grid(x)(y)
          lazy val inc = 1 - (tm-t0)%2
          ((t0+1) max (tm+inc)) -> (x,y)                    
        }.filterNot{case (tm,xy) => v.contains(xy) && v(xy) <= tm }
      if(q.isEmpty) v((grid.size-1),(grid.head.size-1))
      else f(t ++ aa, v ++ (aa.map{case (tm,xy) => xy -> tm }))
    }
    if((grid(1)(0) min grid(0)(1)) > 1 ) -1 else f(TreeSet(grid(0)(0) -> (0,0)), Map((0,0) -> grid(0)(0)))
  }
}

```