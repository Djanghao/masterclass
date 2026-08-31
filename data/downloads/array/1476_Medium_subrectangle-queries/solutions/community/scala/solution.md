# ✅ Scala: straightforward solution (beats 100%)

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/subrectangle-queries/solutions/3422815/](https://leetcode.com/problems/subrectangle-queries/solutions/3422815/)

---

# Code
```scala
  class SubrectangleQueries(_rectangle: Array[Array[Int]]) {

    def updateSubrectangle(
      row1: Int, col1: Int,
      row2: Int, col2: Int,
      newValue: Int
    ): Unit =
      for (row <- row1 to row2){
        for (col <- col1 to col2){
          _rectangle(row)(col) = newValue
        }
      }

    def getValue(row: Int, col: Int): Int = _rectangle(row)(col)

  }
```