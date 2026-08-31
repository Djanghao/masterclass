# [scala] - straightforward

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2697206/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2697206/)

---

```scala
def maxSum(grid: Array[Array[Int]]): Int = {
  def getSum(i: Int, j: Int) = {
    val top = grid(i)(j) + grid(i)(j + 1) + grid(i)(j + 2)
    val middle = grid(i + 1)(j + 1)
    val bottom = grid(i + 2)(j) + grid(i + 2)(j + 1) + grid(i + 2)(j + 2)
    top + middle + bottom
  }

  val sums =
    for {
      i <- 0 until grid.length - 2
      j <- 0 until grid(i).length - 2
    } yield getSum(i, j)

  sums.max
}
```