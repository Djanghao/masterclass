# scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/lonely-pixel-i/solutions/4525629/](https://leetcode.com/problems/lonely-pixel-i/solutions/4525629/)

---

# Code
```
object Solution {
  def findLonelyPixel(picture: Array[Array[Char]]): Int = {
    val m = picture.length
    val n = picture(0).length

    val rowBlackCounts = new Array[Int](m)
    val colBlackCounts = new Array[Int](n)

    // Count black pixels in each row and column
    for {
      i <- 0 until m
      j <- 0 until n
      if picture(i)(j) == 'B'
    } {
      rowBlackCounts(i) += 1
      colBlackCounts(j) += 1
    }

    // Count lonely black pixels
    var count = 0
    for {
      i <- 0 until m
      j <- 0 until n
      if picture(i)(j) == 'B' && rowBlackCounts(i) == 1 && colBlackCounts(j) == 1
    } {
      count += 1
    }

    count
  }
}

```