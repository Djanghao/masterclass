# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/selling-pieces-of-wood/solutions/2176294/](https://leetcode.com/problems/selling-pieces-of-wood/solutions/2176294/)

---

```
object Solution {
  def sellingWood(m: Int, n: Int, prices: Array[Array[Int]]): Long = {
    val dp = Array.fill(m + 1, n + 1)(0L)
    for (Array(height, width, price) <- prices) {
      dp(height)(width) = price
    }
    
    for {
      height <- 1 to m
      width <- 1 to n
    } {
      dp(height)(width) = Iterator(dp(height)(width))
        .concat((1 to height / 2).iterator.map(h => dp(h)(width) + dp(height - h)(width)))
        .concat((1 to width / 2).iterator.map(w => dp(height)(w) + dp(height)(width - w)))
        .max
    }
    
    dp(m)(n)
  }
}
```