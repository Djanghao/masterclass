# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/dice-roll-simulation/solutions/3769401/](https://leetcode.com/problems/dice-roll-simulation/solutions/3769401/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def dieSimulator(n: Int, rollMax: Array[Int]): Int = {
        val mod = 1000000007
        val dp = Array.ofDim[Long](n+1, 6)
        val sum = Array.ofDim[Long](n+1)
        sum(0) = 1
        for (i <- 1 to n; j <- 0 until 6) {
            for (k <- 1 to rollMax(j) if i - k >= 0) dp(i)(j) = (dp(i)(j) + sum(i-k) - dp(i-k)(j) + mod) % mod
            sum(i) = (sum(i) + dp(i)(j)) % mod
        }
        sum(n).toInt
    }
}
```