# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-the-spreading-fire/solutions/4268525/](https://leetcode.com/problems/escape-the-spreading-fire/solutions/4268525/)

---

```scala
import scala.collection.mutable

object Solution {
  val INF = 1000000000
  val dirs: Array[Array[Int]] = Array(Array(-1, 0), Array(1, 0), Array(0, -1), Array(0, 1))

  def maximumMinutes(grid: Array[Array[Int]]): Int = {
    val m = grid.length
    val n = grid.head.length
    val fireTime = Array.fill(m, n)(INF)

    bfs(grid, fireTime)

    val arriveTime = getArriveTime(grid, fireTime, 0)

    if (arriveTime < 0) -1
    else if (fireTime(m - 1)(n - 1) == INF) INF
    else {
      val res = fireTime(m - 1)(n - 1) - arriveTime
      if (getArriveTime(grid, fireTime, res) >= 0) res else res - 1
    }
  }

  private def bfs(grid: Array[Array[Int]], fireTime: Array[Array[Int]]): Unit = {
    val m = grid.length
    val n = grid.head.length
    val queue = mutable.Queue.empty[Array[Int]]

    grid.indices.foreach(i => grid.head.indices
      .withFilter(j => grid(i)(j) == 1)
      .foreach(j => {
        queue += Array(i, j)
        fireTime(i)(j) = 0
      }))

    var time = 1
    while (queue.nonEmpty) {
      val sz = queue.size
      (0 until sz).foreach(_ => {
        val Array(cx, cy) = queue.dequeue()
        dirs.foreach { case Array(dx, dy) =>
          val nx = cx + dx
          val ny = cy + dy
          if (nx >= 0 && ny >= 0 && nx < m && ny < n && grid(nx)(ny) != 2 && fireTime(nx)(ny) == INF) {
            queue += Array(nx, ny)
            fireTime(nx)(ny) = time
          }
        }
      })
      time += 1
    }
  }


  private def getArriveTime(grid: Array[Array[Int]], fireTime: Array[Array[Int]], stayTime: Int): Int = {
    val m = fireTime.length
    val n = fireTime.head.length
    val visit = Array.fill(m, n)(false)
    val queue = mutable.Queue.empty[Array[Int]]
    queue += Array(0, 0, stayTime)
    visit(0)(0) = true

    while (queue.nonEmpty) {
      val Array(cx, cy, time) = queue.dequeue()
      dirs.foreach { case Array(dx, dy) =>
        val nx = cx + dx
        val ny = cy + dy
        if (nx >= 0 && ny >= 0 && nx < m && ny < n && grid(nx)(ny) != 2 && !visit(nx)(ny)) {
          if (nx == m - 1 && ny == n - 1) return time + 1
          if (fireTime(nx)(ny) > time + 1) {
            visit(nx)(ny) = true
            queue += Array(nx, ny, time + 1)
          }
        }
      }
    }
    -1
  }
}
```