# Scala terrible non-FP: 3 nested foldLeft with monotonic Stacks for each column (770ms)

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-rectangle/solutions/5016886/](https://leetcode.com/problems/maximal-rectangle/solutions/5016886/)

---

# Code
```
object Solution {
  def maximalRectangle(matrix: Array[Array[Char]]): Int = {
    val width = matrix.head.length
    val ones = Array.ofDim[Int](width)
    val stacks = Array.fill(width)(collection.mutable.Stack[Array[Int]]())

    matrix.foldLeft(0) { (maxInRows, row) =>
      (0 until width).foldLeft(maxInRows) { (maxInRow, i) =>
        val onesCount = if (i == 0) row(0) - '0' else if (row(i) == '1') ones(i - 1) + 1 else 0
        ones(i) = onesCount
        val stack = stacks(i)
        if (onesCount == 0) {
          stack.clear()
          maxInRow
        } else {
          var lastHigherCount = 0
          while(stack.nonEmpty && onesCount < stack.head(0)) lastHigherCount = stack.pop()(1)

          if (stack.isEmpty || stack.head(0) != onesCount) stack.push(Array(onesCount, lastHigherCount))

          stack.foldLeft(maxInRow) { (max, ar) =>
            ar(1) += 1
            max.max(ar(0) * ar(1))
          }
        }
      }
    }
  }
}
```