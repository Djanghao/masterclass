# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/5043229/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/5043229/)

---

```
object Solution {
  def minimumMoves(grid: Array[Array[Int]]): Int = {
    def dist(x2:Int, y2: Int)(x0:Int, y0: Int): Int =  (x2-x0).abs + (y2-y0).abs
    lazy val (to,from) = grid.indices.flatMap{i =>
      grid.head.indices.collect { case j if grid(i)(j) != 1 =>
        (i,j) ->  (grid(i)(j) - 1)
    }}.to(Map).partition(_._2 < 0)
    def dp(from: Map[(Int,Int),Int], to: Set[(Int,Int)]  ): Int =
      if(to.isEmpty) 0 
      else from.collect{case ((x2:Int,y2:Int), n:Int) if n>0 =>
        to.map{case (x0:Int,y0:Int) => 
          lazy val d = dist(x2,y2)(x0,y0)
          (dist(x2,y2)(x0,y0)) +  dp(from + ((x2,y2) -> (n-1)), to - ((x0,y0)) )
      }}.flatten.min
    dp(from,to.keys.toSet)
  }
}
```