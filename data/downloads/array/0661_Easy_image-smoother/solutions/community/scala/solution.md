# [scala] non_fp + math

**Author:** leetcode08
**Votes:** 2
**Link:** [https://leetcode.com/problems/image-smoother/solutions/4425139/](https://leetcode.com/problems/image-smoother/solutions/4425139/)

---

# Complexity
- Time complexity: $$O(m\xB7n)$$
- Space complexity: $$O(m\xB7n)$$

# Code
```scala
object Solution {
  def imageSmoother(img: Array[Array[Int]]): Array[Array[Int]] = {
    val m = img.size
    val n = img(0).size

    val res = Array.ofDim[Int](m, n)

    def getSegment(i: Int, j: Int): Seq[Int] =
      for {
        x <- math.max(0, i - 1) to math.min(m - 1, i + 1)
        y <- math.max(0, j - 1) to math.min(n - 1, j + 1)	
      } yield img(x)(y)

    for { i <- 0 until m; j <- 0 until n } {
      val segment = getSegment(i, j)
      res(i)(j) = segment.sum / segment.size
    }

    res
  }
}
```