# Scala naive

**Author:** nikiforo
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/1907027/](https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/1907027/)

---

```
def numberOfWays(s: String): Long = {
  def count(n0: Long, n1: Long, n10: Long, n01: Long, acc: Long, rem: List[Char]): Long =
    rem match {
      case Nil => acc
      case '1' :: tail => count(n0    , n1 + 1, n10,      n01 + n0, acc + n10, tail)
      case '0' :: tail => count(n0 + 1, n1    , n10 + n1, n01     , acc + n01, tail)
      case _ => ???
    }

  count(0, 0, 0, 0, 0, s.toList)
}
  ```