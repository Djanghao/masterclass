# using 3 state variables and memoisation

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/out-of-boundary-paths/solutions/6116546/](https://leetcode.com/problems/out-of-boundary-paths/solutions/6116546/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
  def findPaths(m: Int, n: Int, maxMove: Int, startRow: Int, startColumn: Int): Int = {
    val mod=Math.pow(10,9)+7
    def count(i: Int, j: Int, movesLeft: Int, memo: Array[Array[Array[Int]]]): Int = {
      if (i == m || j == n || i < 0 || j < 0) 1
      else if (memo(i)(j)(movesLeft) != -1) memo(i)(j)(movesLeft)
      else {
        memo(i)(j)(movesLeft) = if (movesLeft > 0) {
          val result=count(i + 1, j, movesLeft - 1, memo)%mod +
            count(i - 1, j, movesLeft - 1, memo)%mod +
            count(i, j + 1, movesLeft - 1, memo)%mod +
            count(i, j - 1, movesLeft - 1, memo)%mod
          (result%mod).toInt
        } else 0
        memo(i)(j)(movesLeft)
      }
    }

    val memo = Array.fill(m, n, maxMove + 1)(-1)
    count(startRow, startColumn, maxMove, memo)
  }
}
```