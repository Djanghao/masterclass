# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3771029/](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3771029/)

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
  def minimumBeautifulSubstrings(s: String): Int = {
    val n = s.length
    val dp = Array.fill(n + 1)(n + 1)
    dp(0) = 0
    for {i <- 0 until n
      if (s.charAt(i) != '0')}{
      (i until n).foldLeft(0)((cur, j)=>{
        val t = cur * 2 + s.charAt(j) - '0'
        if (15625 % t == 0) dp(j + 1) = Math.min(dp(j + 1), dp(i) + 1)
        t
      })
    }
    if (dp(n) > n) -1 else dp(n)
  }
}
```