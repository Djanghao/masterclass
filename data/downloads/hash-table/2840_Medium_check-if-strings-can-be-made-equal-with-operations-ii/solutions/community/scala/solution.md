# 3 lines scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/5171811/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/5171811/)

---

```
object Solution {
  def checkStrings(s1: String, s2: String): Boolean =
    lazy val (s1a,s1b) = s1.zipWithIndex.partition(_._2 % 2 == 0)
    lazy val (s2a,s2b) = s2.zipWithIndex.partition(_._2 % 2 == 0)
    s1a.map(_._1).sorted == s2a.map(_._1).sorted && s1b.map(_._1).sorted == s2b.map(_._1).sorted
}
```