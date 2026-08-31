# ✅ Scala: easy solution using split & mkString

**Author:** aaabramov
**Votes:** 1
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/3455159/](https://leetcode.com/problems/capitalize-the-title/solutions/3455159/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {

  def capitalizeTitle(title: String): String =
    title
      .split(' ')
      .map {
        case s if s.length < 3 => s.toLowerCase
        case s                 => s.toLowerCase.capitalize
      }
      .mkString(" ")

}
```