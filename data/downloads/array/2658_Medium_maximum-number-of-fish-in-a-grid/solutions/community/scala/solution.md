# scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/5046924/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/5046924/)

---

```
object Solution {
  import collection.immutable.Queue
  def findMaxFish(grid: Array[Array[Int]]): Int = {
    def bfs(q:Queue[(Int,Int)], v:Set[(Int,Int)]):Set[(Int,Int)] = {
      // println(s"    bfs($q, $v)")
      lazy val ((hx,hy),t) = q.dequeue
      lazy val next = List((-1,0),(1,0),(0,-1),(0,1)).map{case (i,j) => (hx+i,hy+j)}
      .filter{case (i,j) =>
        i>=0 && j>=0 && i<grid.size && j<grid.head.size &&
        grid(i)(j)>0 && !v.contains((i,j))
      }
      if(q.isEmpty) v
      else bfs(t ++ next, v ++ next)
    }
    grid.indices.flatMap{i =>  grid.head.indices.map(i -> _) }
    .foldLeft((Set.empty[(Int,Int)],List.empty[Set[(Int,Int)]])) { case ((s,l), (x,y)) =>
      lazy val next = bfs(Queue((x,y)),Set((x,y)))
      if((grid(x)(y) == 0) || s.contains((x,y))) (s,l)
      else (s++next, next +: l)
    }._2.map{_.iterator.map{case (i,j) => grid(i)(j)}.sum}.maxOption.getOrElse(0)
  }
}
```