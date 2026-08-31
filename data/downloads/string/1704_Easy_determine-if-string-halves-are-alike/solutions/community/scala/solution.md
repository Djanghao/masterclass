# Simple Scala -100%

**Author:** inasaaone
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/1146902/](https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/1146902/)

---

```
object Solution {
    def halvesAreAlike(s: String): Boolean = {
        val v = "aeiouAEIOU"
        val (left, right) = s.splitAt(s.length/2)
        left.count(v.contains(_)) == right.count(v.contains(_))
    }
}
```