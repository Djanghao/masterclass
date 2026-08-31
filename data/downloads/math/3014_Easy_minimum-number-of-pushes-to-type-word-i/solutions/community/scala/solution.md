# easy

**Author:** user3116J
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/5597545/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/5597545/)

---

# Code
```
object Solution {
  def minimumPushes(word: String): Int = {
    val n = word.size / 8
    (n + 1) * (n * 4 + word.size % 8)
  }
}
```