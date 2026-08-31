# Scala 1L, 86%

**Author:** khokhlin
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/1720011/](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/1720011/)

---

```scala
object Solution {
    def areOccurrencesEqual(s: String): Boolean = {
        s.distinct.map(ch => s.count(_ == ch)).distinct.length == 1
    }
}
```