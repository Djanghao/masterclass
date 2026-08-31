# Scala recursion solution

**Author:** Anamorphism
**Votes:** 1
**Link:** [https://leetcode.com/problems/wildcard-matching/solutions/671268/](https://leetcode.com/problems/wildcard-matching/solutions/671268/)

---

```
object Solution {
  def isMatch(s: String, p: String): Boolean = {
    val newP = reduceStar(p.toList).mkString
    val m = scala.collection.mutable.HashMap[(Int, Int), Boolean]()
    def helper(s: String, i: Int, p: String, j: Int): Boolean = {
      m.get((i, j)) match {
        case Some(b) => b
        case None => {
          if (j == p.size && i == s.size) {
            m +=  ((i, j) -> true)
            true
          } else if (j == p.size) {
            m +=  ((i, j) -> false)
            false
          } else if (i == s.size) {
            val r = if(p(j) == '*') helper(s, i, p, j + 1) else false
            m +=  ((i, j) -> r)
            r
          } else {
            val r = if (p(j) != '?' && p(j) != '*') {
              if (s(i) == p(j)) {
                helper(s, i + 1, p, j + 1)
              } else {
                false
              }
            } else if (p(j) == '?') {
              helper(s, i + 1, p, j + 1)
            } else {
              helper(s, i, p, j + 1) || helper(s, i + 1, p, j)
            }
            m += ((i, j) -> r)
            r
          }
        }
      }
    }
    helper(s, 0, newP, 0)
  }
    
  def reduceStar(s: List[Char]): List[Char] = {
      s match {
          case Nil => Nil
          case '*' :: '*' :: xs => reduceStar('*' :: xs)
          case x :: xs => x :: reduceStar(xs)
      }
  }
}
```