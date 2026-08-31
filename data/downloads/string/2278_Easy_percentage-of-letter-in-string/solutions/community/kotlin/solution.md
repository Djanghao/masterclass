# One-line solution

**Author:** Winged90
**Votes:** 0
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/4909758/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/4909758/)

---

# Intuition
One-line solution

# Code
```
class Solution {
    fun percentageLetter(s: String, letter: Char) = s.count { it == letter }.run { this * 100 / s.length}
}
```