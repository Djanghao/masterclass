# scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/coloring-a-border/solutions/5041985/](https://leetcode.com/problems/coloring-a-border/solutions/5041985/)

---

```
object Solution {
  import collection.immutable.Queue
  def colorBorder(grid: Array[Array[Int]], row: Int, col: Int, color: Int): Array[Array[Int]] = {
    lazy val color0 = grid(row)(col)
    def bfs(q:Queue[(Int,Int)], v:Set[(Int,Int)]): Set[(Int,Int)] = {
      lazy val ((x0,y0),t) = q.dequeue
      lazy val next = List((-1,0),(0,-1),(1,0),(0,1)).map{(i,j)=> (x0 + i, y0 + j)}
        .filterNot{case (x,y) =>
          x<0 || y<0 || x>=grid.size || y>=grid.head.size ||
          grid(x)(y) != color0 || v.contains((x,y))
        }
      if(q.isEmpty) v
      else bfs(t ++ next, v ++ next)
    }
    bfs(Queue((row,col)), Set((row,col))).filter{case (x,y) =>
      (x==0 || y==0 || x==grid.size-1 || y==grid.head.size-1) ||
      List((-1,0),(0,-1),(1,0),(0,1)).exists{(i,j) => grid(x+i)(y+j) != grid(x)(y)}
    }
    .foreach{(x,y) => grid(x)(y) = color}
    grid
  }
}
```