# [Scala] 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts, simple solution

**Author:** stefancomanita
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2229397/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2229397/)

---

Simple Scala solution that beat 100%, it uses rectangular arithmethics.

```
object Solution {
  def maxArea(h: Int, w: Int, horizontalCuts: Array[Int], verticalCuts: Array[Int]): Int = {

    val MODULO: Int = (Math.pow(10, 9) + 7).toInt

    java.util.Arrays.sort(horizontalCuts)
    java.util.Arrays.sort(verticalCuts)

    var maxCol: Long = 0

    for (i <- horizontalCuts.indices) {

      if (i != 0) {
        val local = horizontalCuts(i) - horizontalCuts(i - 1)

        maxCol = Math.max(maxCol, local)
      }
    }

    maxCol = Math.max(maxCol, horizontalCuts.head)
    maxCol = Math.max(maxCol, h - horizontalCuts.last)

    var maxRow: Long = 0

    for (i <- verticalCuts.indices) {

      if (i != 0) {
        val local = verticalCuts(i) - verticalCuts(i - 1)

        maxRow = Math.max(maxRow, local)
      }
    }

    maxRow = Math.max(maxRow, verticalCuts.head)
    maxRow = Math.max(maxRow, w - verticalCuts.last)

    ((maxCol * maxRow)%(MODULO)).toInt
  }
}
```