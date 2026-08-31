# Kotlin - pure functional

**Author:** tucux
**Votes:** 9
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/1995616/](https://leetcode.com/problems/longest-palindrome/solutions/1995616/)

---

```
class Solution {
    fun longestPalindrome(s: String): Int {
        return minOf(
            s.length,
            1 + s
                .groupingBy { it }
                .eachCount()
                .map { (k, v) -> v / 2 * 2 }
                .sum()
        )
    }
}
```