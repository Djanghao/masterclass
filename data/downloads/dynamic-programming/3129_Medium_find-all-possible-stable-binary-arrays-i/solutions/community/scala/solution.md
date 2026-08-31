# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5743844/](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5743844/)

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
  def numberOfStableArrays(zero: Int, one: Int, limit: Int): Int = {
    val MOD = 1000000007
    val dp = Array.fill(zero + 1, one + 1, 2)(0L)
    dp(0)(0)(0) = 1
    dp(0)(0)(1) = 1
    for{
      i <- 0 to zero
      j <- 0 to one
      k <- 1 to limit
    }{
      if(i - k >= 0) dp(i)(j)(1) = (dp(i)(j)(1) + dp(i - k)(j)(0)) % MOD
      if(j - k >= 0) dp(i)(j)(0) = (dp(i)(j)(0) + dp(i)(j - k)(1)) % MOD
    }
    ((dp(zero)(one).sum) % MOD).toInt
  }
}
```