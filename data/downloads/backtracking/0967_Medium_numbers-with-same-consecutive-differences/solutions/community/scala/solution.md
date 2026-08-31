# Simple & Easy to read - backtracking approach

**Author:** stan256
**Votes:** 0
**Link:** [https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/5358507/](https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/5358507/)

---

# Complexity
- Time complexity:
2^N

# Code
```
object Solution {
    def numsSameConsecDiff(n: Int, k: Int): Array[Int] = {
    var arr = Array.empty[Int]

    def backtracking(i: Int, iteration: Int): Unit = {
      if (iteration == n) {
        arr = arr :+ i
      } else {
        for (j <- 0 to 9) {
          if (iteration == 0) {
            if ((j + k < 10 || j - k >= 0) && j != 0) {
              backtracking(j, iteration + 1)
            }
          } else {
            val diff = Math.abs(i % 10 - j)
            if (diff == k) {
              backtracking(i * 10 + j, iteration + 1)
            }
          }
        }
      }
    }

    backtracking(0, 0)

    arr
  }
}
```