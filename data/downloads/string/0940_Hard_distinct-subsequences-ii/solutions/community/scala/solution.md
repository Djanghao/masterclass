# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-subsequences-ii/solutions/3649193/](https://leetcode.com/problems/distinct-subsequences-ii/solutions/3649193/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def distinctSubseqII(s: String): Int = {
      val mod = 1000000007
      val dp = Array.fill(s.length + 1)(0)
      dp(0) = 1
      val last = Array.fill(26)(-1)
      for (i <- 1 to s.length) {
        dp(i) = (dp(i - 1) * 2) % mod
        val idx = s(i - 1) - 'a'
        if (last(idx) != -1) dp(i) = (dp(i) - dp(last(idx) - 1) + mod) % mod
        last(idx) = i
      }
      (dp(s.length) - 1 + mod) % mod
    }
}
```