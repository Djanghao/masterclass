# Kotlin 1 line

**Author:** GeorgCantor
**Votes:** 16
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/1264513/](https://leetcode.com/problems/valid-palindrome/solutions/1264513/)

---

```
fun isPalindrome(s: String) = s.filter { it.isLetterOrDigit() }.run { equals(reversed(), true) }
```