# [scala] - recursion

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3594372/](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3594372/)

---

# Code
```
object Solution {
  def findTheLongestBalancedSubstring(s: String): Int =
    go(s.toList, 0, 0, 0) * 2

  def go(chars: List[Char], zeros: Int, ones: Int, max: Int): Int =
    chars match {
      case Nil => max
      case '0' :: tail =>
        if (ones > 0) go(tail, 1, 0, max)
        else go(tail, zeros + 1, 0, max)
      case '1' :: tail =>
        if (zeros > 0) go(tail, zeros - 1, ones + 1, math.max(max, ones + 1))
        else go(tail, 0, 0, max)
      case _ => ???
    }
}
```