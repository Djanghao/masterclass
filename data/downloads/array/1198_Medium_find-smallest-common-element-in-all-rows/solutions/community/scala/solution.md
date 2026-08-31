# scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/4512393/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/4512393/)

---

# Code
```
import scala.util.control.Breaks._
import java.util.Arrays

object Solution {
  def smallestCommonElement(mat: Array[Array[Int]]): Int = {
    val n = mat.length
    val m = mat(0).length
    for (j <- 0 until m) {
      var found = true
      breakable {
        for (i <- 1 until n) {
          if (Arrays.binarySearch(mat(i), mat(0)(j)) < 0) {
            found = false
            break
          }
        }
      }
      if (found) {
        return mat(0)(j)
      }
    }
    -1
  }
}


```