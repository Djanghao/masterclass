# memoization + recursion.. Beats 100 %

**Author:** saurabhkishoretiwari90
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/4972025/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/4972025/)

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
  def minDistance(word1: String, word2: String): Int = {
    val dp = Array.fill(word1.length + 1, word2.length + 1)(-1)

    def lcs(i: Int, j: Int): Int = {
      if(i <= 0 || i > word1.length || j <= 0 || j > word2.length) 0
      else if (dp(i)(j) != -1) dp(i)(j)
      else{
        if(word1.charAt(i - 1) == word2.charAt(j - 1)) dp(i)(j) = 1 + lcs(i + 1, j + 1)
        else dp(i)(j) = math.max(lcs(i + 1, j), lcs(i, j + 1))
        dp(i)(j)
      }
    }
    
    word1.length + word2.length - (lcs(1, 1) << 1)
  }
}
```