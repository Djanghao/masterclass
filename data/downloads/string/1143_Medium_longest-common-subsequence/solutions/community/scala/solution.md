# Scala

**Author:** kamikumakun
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-common-subsequence/solutions/3087815/](https://leetcode.com/problems/longest-common-subsequence/solutions/3087815/)

---

# Complexity
- Time complexity: O(M * N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(MIN(M, N))
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.math.max

object Solution {
    def longestCommonSubsequence(text1: String, text2: String): Int = {

        val m = text1.length
        val n = text2.length

        val dp = Array.ofDim[Int](m + 1, n + 1)

        for {
            i <- 1 to m
            j <- 1 to n
        } {
           if(text1.charAt(i - 1) == text2.charAt(j - 1)) {
               val diagonal = dp(i - 1)(j - 1)
               dp(i)(j) = diagonal + 1
           } else {
               val top = dp(i - 1)(j)
               val left = dp(i)(j - 1)
               dp(i)(j) = max(top, left)
           }
        }

        dp(m)(n)
    }
}


```