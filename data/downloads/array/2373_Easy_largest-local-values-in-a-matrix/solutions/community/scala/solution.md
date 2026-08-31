# [scala] - four loops

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/2438185/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/2438185/)

---

```scala
def largestLocal(grid: Array[Array[Int]]): Array[Array[Int]] = {
  def locals(centerI: Int, centerJ: Int) =
    for {
      i <- centerI - 1 to centerI + 1
      j <- centerJ - 1 to centerJ + 1
    } yield grid(i)(j)

  1.until(grid.length - 1).toArray.map { i =>
    1.until(grid(i).length - 1).toArray.map(j => locals(i, j).max)
  }
}
```