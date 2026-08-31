# Scala simple solution

**Author:** xDavidRTx
**Votes:** 7
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/2554259/](https://leetcode.com/problems/isomorphic-strings/solutions/2554259/)

---

```
 def isIsomorphic(s: String, t: String): Boolean = {
        val mapped = s.zip(t).toMap.map(_.swap)
        t.flatMap(mapped.get(_)).mkString == s
}
```
