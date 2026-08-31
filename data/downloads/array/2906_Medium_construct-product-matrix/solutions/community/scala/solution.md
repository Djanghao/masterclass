# [Scala] Concise functional solution based on prefix & suffix product

**Author:** cosminci
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-product-matrix/solutions/4225640/](https://leetcode.com/problems/construct-product-matrix/solutions/4225640/)

---

```
object Solution {

  def constructProductMatrix(grid: Array[Array[Int]]): Array[Array[Int]] = {
    val mod = 12345
    val (m, n) = (grid.length, grid.head.length)

    val prefixProduct = grid.flatten.scanLeft(1L)((acc, v) => (acc * v) % mod)
    val suffixProduct = grid.flatten.scanRight(1L)((v, acc) => (acc * v) % mod).tail

    Array.tabulate(m) { r =>
      Array.tabulate(n) { c =>
        (prefixProduct(r * n + c) * suffixProduct(r * n + c) % mod).toInt
      }
    }
  }

}
```