# Scala Code

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum/solutions/5238182/](https://leetcode.com/problems/minimum-falling-path-sum/solutions/5238182/)

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
```
object Solution {
    def minFallingPathSum(matrix: Array[Array[Int]]): Int = {
        val m = matrix.length
        val n = matrix(0).length

        val dp = Array.fill(m, n)(Int.MaxValue)

        def solve(i: Int, j: Int): Int = {
            if (j < 0 || j >= n) return Int.MaxValue
            if (i == m - 1) return matrix(i)(j)
            if (dp(i)(j) != Int.MaxValue) return dp(i)(j)

            val left = solve(i + 1, j - 1)
            val down = solve(i + 1, j)
            val right = solve(i + 1, j + 1)

            dp(i)(j) = matrix(i)(j) + Math.min(left, Math.min(down, right))
            dp(i)(j)
        }

        var mini = Int.MaxValue
        for (j <- 0 until n) {
            mini = Math.min(solve(0, j), mini)
        }
        mini
    }
}

```