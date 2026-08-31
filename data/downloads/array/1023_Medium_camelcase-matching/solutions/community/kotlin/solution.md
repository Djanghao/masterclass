# Kotlin

**Author:** GeorgCantor
**Votes:** 0
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/3311033/](https://leetcode.com/problems/camelcase-matching/solutions/3311033/)

---

```
fun camelMatch(q: Array<String>, p: String) = q.map {
    var i = 0
    it.forEach {
        if (i < p.length && it == p[i]) ++i
        else if (it.isUpperCase()) return@map false
    }
    p.length == i
}
```