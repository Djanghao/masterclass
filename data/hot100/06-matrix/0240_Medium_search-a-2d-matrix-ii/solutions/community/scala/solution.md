# Scala In 7 lines

**Author:** K-Arash
**Votes:** 2
**Link:** [https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/1312049/](https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/1312049/)

---

- https://github.com/Kiarash-Parvizi/leetcode-scala
```
object Solution {
    def searchMatrix(matrix: Array[Array[Int]], target: Int): Boolean = {
        val (m, n) = (matrix.length, matrix(0).length)
        var (h, w) = (0, n-1)
        while (h < m && w >= 0)
            matrix(h)(w) compare target match {
                case 0  => return true
                case 1  => w -= 1
                case -1 => h += 1
            }
        false
    }
}
```