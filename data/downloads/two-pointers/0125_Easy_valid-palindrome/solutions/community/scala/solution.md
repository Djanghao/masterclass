# ✅ Scala: straightforward solution (beats 80%)

**Author:** aaabramov
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/3450892/](https://leetcode.com/problems/valid-palindrome/solutions/3450892/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {

  def isPalindrome(s: String): Boolean = {
    val normalized = s.filter(c => c.isLetter || c.isDigit).toLowerCase

    val size = normalized.length

    for (i <- 0 until size / 2) {
      if (normalized(i) != normalized(size - i - 1)) {
        return false
      }
    }

    true
  }

}
```