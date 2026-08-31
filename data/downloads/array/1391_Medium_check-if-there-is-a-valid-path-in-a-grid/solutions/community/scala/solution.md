# Build graph, traverse with DFS

**Author:** romanovsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/5712804/](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/5712804/)

---

Publishing my this non-pretty solution as there're no other Scala solutions published yet.

# Intuition
It's a graph, check if `finish` is reacheable from `start`.

# Approach
<!-- Describe your approach to solving the problem. -->
Just walking over `gird` with 1 pass looks unreadable. So I built a graph out of `grid` then traversed it with DFS. It's pretty imperative (vars, loops), but straightforward.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$ (could've beon $$O(1)$$ if you avoid building the graph)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
  case class Tile(
    var visited: Boolean = false,
    var left: Option[Tile] = None,
    var right: Option[Tile] = None,
    var up: Option[Tile] = None,
    var down: Option[Tile] = None) {
  }

  def hConnected(l: Int, r: Int): Boolean =
    l match {
      case 1 if r==1 || r==3 || r==5 => true
      case 2 => false
      case 3 => false
      case 4 if r==1 || r==3 || r==5 => true
      case 5 => false
      case 6 if r==1 || r==3 || r==5 => true
      case _ => false
    }

  def vConnected(u: Int, d: Int): Boolean =
    u match {
      case 1 => false
      case 2 if d==2 || d==5 || d==6 => true
      case 3 if d==2 || d==5 || d==6 => true
      case 4 if d==2 || d==5 || d==6 => true
      case 5 => false
      case 6 => false
      case _ => false
    }

  def hasValidPath(grid: Array[Array[Int]]): Boolean = {
    val rows = grid.length
    val cols = grid.head.length
    val tiles = Array.fill[Tile](rows, cols)(Tile())
    for (i <- grid.indices) {
      for (j <- grid.head.indices) {
        val t = tiles(i)(j)
        if (j!=0 && hConnected(grid(i)(j-1), grid(i)(j))) t.left = Some(tiles(i)(j-1))
        if (j!=cols-1 && hConnected(grid(i)(j), grid(i)(j+1))) t.right = Some(tiles(i)(j+1))
        if (i!=rows-1 && vConnected(grid(i)(j), grid(i+1)(j))) t.down = Some(tiles(i+1)(j))
        if (i!=0 && vConnected(grid(i-1)(j), grid(i)(j))) t.up = Some(tiles(i-1)(j))
      }
    }
    def dfs(start: Tile): Unit = {
      val q = scala.collection.mutable.Queue(start)
      while(q.nonEmpty) {
        val t = q.dequeue()
        t.visited = true
        t.right.fold(()) { r => if (!r.visited) q.enqueue(r) }
        t.left.fold(()) { l => if (!l.visited) q.enqueue(l) }
        t.up.fold(()) { u => if (!u.visited) q.enqueue(u) }
        t.down.fold(()) { d => if (!d.visited) q.enqueue(d) }
      }
    }
    dfs(tiles(0)(0))
    tiles(rows-1)(cols-1).visited
  }
}
```