# [scala] - recursion

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3622687/](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3622687/)

---

# Code
```
object Solution {
  def longestSemiRepetitiveSubstring(s: String): Int =
    go(s.head, s.toList.tail, 1, 1, 0)

  def go(c: Char, chars: List[Char], notRepeated: Int, repeated: Int, max: Int): Int = {
    chars match {
      case Nil => math.max(max, repeated)
      case h :: tail =>
        if (c == h) go(h, tail, 1, notRepeated + 1, math.max(max, repeated))
        else go(h, tail, notRepeated + 1, repeated + 1, max)
    }
  }
}
```