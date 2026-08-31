# [scala] - sliding

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5095890/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5095890/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```scala
object Solution {
  def canMakeSquare(grid: Array[Array[Char]]): Boolean =
    (for {
      is <- grid.indices.sliding(2)
      js <- grid(0).indices.sliding(2)
    } yield is.flatMap(i => js.map(j => grid(i)(j)))).exists(_.count(_ == 'B') != 2)
}
```
