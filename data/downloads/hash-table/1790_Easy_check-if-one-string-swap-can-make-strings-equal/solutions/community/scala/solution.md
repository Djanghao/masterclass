# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/3211993/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/3211993/)

---

# Code
```
object Solution {
    def areAlmostEqual(s1: String, s2: String): Boolean = {
      lazy val x0 = (s1 zip s2).filterNot{case (a,b) => a==b}.toList
      (s1 == s2) || ((x0.size == 2) && (x0.head._1 == x0.last._2) && (x0.head._2 == x0.last._1))
    }
}
```