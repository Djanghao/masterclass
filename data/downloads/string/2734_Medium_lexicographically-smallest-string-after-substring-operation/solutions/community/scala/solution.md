# [scala] - recursion, two stages

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3630168/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3630168/)

---

# Code
```
object Solution {

  def smallestString(s: String): String =
    pre(s.head, s.toList.tail, List.empty).mkString

  private def pre(prev: Char, chars: List[Char], acc: List[Char]): List[Char] =
    (prev, chars) match {
      case ('a', Nil) => ('z' :: acc).reverse
      case ('a', c :: tail) => pre(c, tail, 'a' :: acc)
      case _ => post(prev :: chars, acc)
    }

  private def post(chars: List[Char], acc: List[Char]): List[Char] =
    chars match {
      case Nil => acc.reverse
      case 'a' :: tail => acc.reverse ++ chars
      case c :: tail => post(tail, (c - 1).toChar :: acc)
    }
}
```