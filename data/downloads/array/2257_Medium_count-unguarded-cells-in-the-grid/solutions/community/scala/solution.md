# scala

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solutions/1994595/](https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solutions/1994595/)

---

```scala
def countUnguarded(m: Int, n: Int, guards: Array[Array[Int]], walls: Array[Array[Int]]): Int = {
  val arr = Array.fill(m)(Array.fill(n)('o'))

  def isObstacle(i: Int, j: Int): Boolean = arr(i)(j) == 'G' || arr(i)(j) == 'W'

  def markIPlus(i: Int, j: Int): Unit =
    if(i < m && !isObstacle(i, j)) {
      arr(i)(j) = 'g'
      markIPlus(i + 1, j)
    }

  def markIMinus(i: Int, j: Int): Unit =
    if(i >= 0 && !isObstacle(i, j)) {
      arr(i)(j) = 'g'
      markIMinus(i - 1, j)
    }

  def markJPlus(i: Int, j: Int): Unit =
    if(j < n && !isObstacle(i, j)) {
      arr(i)(j) = 'g'
      markJPlus(i, j + 1)
    }

  def markJMinus(i: Int, j: Int): Unit =
    if(j >= 0 && !isObstacle(i, j)) {
      arr(i)(j) = 'g'
      markJMinus(i, j - 1)
    }

  guards.foreach { case Array(i, j) => arr(i)(j) = 'G' }
  walls.foreach { case Array(i, j) => arr(i)(j) = 'W' }

  guards.foreach { case Array(i, j) =>
    markIPlus(i + 1, j)
    markIMinus(i - 1, j)
    markJPlus(i, j + 1)
    markJMinus(i, j - 1)
  }

  var cnt = 0
  for {
    i <- 0 until m
    j <- 0 until n
  } if(arr(i)(j) == 'o') cnt += 1

  cnt
}
```