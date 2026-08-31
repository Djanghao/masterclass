# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/3699238/](https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/3699238/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countPalindromicSubsequences(s: String): Int = {
        val n = s.length
        val dp = Array.ofDim[Long](n, n)
        val mod = 1_000_000_007
        for(i <- n - 1 to 0 by -1){
          dp(i)(i) = 1
          for(j <- i + 1 until n){
            if(s(i) != s(j)) dp(i)(j) = dp(i+1)(j) + dp(i)(j-1) - dp(i+1)(j-1)
            else {
              dp(i)(j) = 2 * dp(i + 1)(j - 1)
              var left = i + 1
              var right = j - 1
              while(left <= right && s(left) != s(i)) left += 1
              while(left <= right && s(right) != s(i)) right -= 1
              if(left > right) dp(i)(j) += 2
              else if(left == right) dp(i)(j) += 1
              else dp(i)(j) -= dp(left + 1)(right - 1)
            }
            dp(i)(j) = (dp(i)(j) + mod) % mod
          }
        }
        dp(0)(n-1).toInt
    }
}
```