# Scala BFS

**Author:** HeavenWatcher
**Votes:** 1
**Link:** [https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/2837391/](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/2837391/)

---

```scala
object Solution {
    def nearestExit(maze: Array[Array[Char]], entrance: Array[Int]): Int = {
        val (m, n, ent) = (maze.size, maze(0).size, (entrance(0), entrance(1)))
        def exit(t: (Int, Int)) = {val (x, y) = t; (x * y == 0 || x == m - 1 || y == n - 1) && t != ent}
        def valid(t: (Int, Int)) = {val (x, y) = t; 0 <= x && x < m && 0 <= y && y < n && maze(x)(y) == '.'}
		
        def bfs(front: List[(Int, Int)], visited: Set[(Int, Int)], depth: Int): Int = {
            if (front.find(exit).isDefined) depth
            else if (front.isEmpty) -1
			
            else (bfs(_,_,_)).tupled(front.foldLeft(front.empty, visited, depth + 1) { case ((f, v, d), (x, y)) =>
                val nexts = List((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)).filter(valid).filter(!v.contains(_))
                (nexts:::f, v ++ nexts.toSet, d)
            })
        }
        
        bfs(List(ent), Set(ent), 0)
    }
}
```