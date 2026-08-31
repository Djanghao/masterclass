# [scala] - count distinct chars

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-string-length/solutions/3606289/](https://leetcode.com/problems/minimize-string-length/solutions/3606289/)

---

# Code
```
object Solution {
  def minimizedStringLength(s: String): Int =
    s.toSet.size
}
```