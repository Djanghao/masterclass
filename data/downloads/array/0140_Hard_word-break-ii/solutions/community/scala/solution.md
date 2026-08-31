# Simple DP solution

**Author:** unaur
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-break-ii/solutions/6073669/](https://leetcode.com/problems/word-break-ii/solutions/6073669/)

---

# Intuition
Similar to word break (#139) DP solution

# Approach
Create an extra HashMap to keep track of the strings at the given index

# Complexity
- Time complexity:
O(N^2 * M)


# Code
```scala []
import scala.collection.mutable._

object Solution {
    def wordBreak(s: String, wordDict: List[String]): List[String] = {
        val n = s.length
        var dp = Array.ofDim[Boolean](n+1)
        dp(0) = true

        var ps = HashMap.empty[Int, ListBuffer[String]]
        for(i <- 0 to n) {
            ps(i) = ListBuffer.empty[String]
        }
        ps(0) += ""

        for (i <- 1 to n) {
            for (word <- wordDict) {
                val l = word.length
                if(i >= l) {
                    if(dp(i-l) && s.substring(i-l,i) == word) {
                        dp(i) = true
                        for(k <- 0 to ps(i-l).length-1) {
                            val v = ps(i-l)(k) + " " + word
                            ps(i) += v.trim()
                        }
                    }
                }
            }
        }
        ps(n).toList
    }
}
```