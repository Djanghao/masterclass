# Scala simple FP approach

**Author:** squadgazzz
**Votes:** 2
**Link:** [https://leetcode.com/problems/matrix-diagonal-sum/solutions/1143970/](https://leetcode.com/problems/matrix-diagonal-sum/solutions/1143970/)

---

```
  def diagonalSum(mat: Array[Array[Int]]): Int = {
    val n = mat.length
    mat.indices.foldLeft(0) {
      case (sum, x) =>
        val y = n - 1 - x
        if (y == x) {
          sum + mat(x)(x)
        } else {
          sum + mat(x)(x) + mat(x)(y)
        }
    }
  }
```