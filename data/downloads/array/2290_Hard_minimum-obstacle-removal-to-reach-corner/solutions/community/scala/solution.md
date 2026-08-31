# BFS + priorityQueue

**Author:** maciejwadowski
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6092570/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6092570/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {

    import collection.mutable.PriorityQueue
    def minimumObstacles(grid: Array[Array[Int]]): Int = {
        val m = grid(0).length
        val n = grid.length
        val ord = Ordering.by[(Int, Int, Int), Int](_._1).reverse
        val pq = PriorityQueue((grid(0)(0), 0, 0))(ord)

        def bfs(visited: Set[(Int, Int)]): Int = {
            val (steps, x, y) = pq.dequeue()
            if (x == n - 1 && y == m - 1) steps
            else {
                val moveUp = if (x - 1 >= 0 && !visited.contains((x-1,y))) Some((x-1, y)) else None
                val moveLeft = if (y - 1 >= 0 && !visited.contains((x, y-1))) Some((x, y-1)) else None
                val moveRight = if (x + 1 <= n - 1 && !visited.contains((x+1,y))) Some((x+1, y)) else None
                val moveDown = if (y + 1 <= m - 1 && !visited.contains((x, y+1))) Some((x, y+1)) else None
                val toBeRemoved = List(moveRight, moveDown, moveUp, moveLeft).flatten
                val toEnqueue = toBeRemoved.map{ case (i, j) =>
                    if (grid(i)(j) == 1) (steps+1,i,j)
                    else (steps,i,j)
                }
                pq.addAll(toEnqueue)
                bfs(visited ++ toBeRemoved)
            }
        }
        bfs(Set())
    }
}
```