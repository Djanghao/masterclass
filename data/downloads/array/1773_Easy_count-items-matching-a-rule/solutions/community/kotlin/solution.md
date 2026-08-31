# Kotlin 1 line

**Author:** GeorgCantor
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/1158719/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/1158719/)

---

```
fun countMatches(l: List<List<String>>, k: String, v: String) = l.count { it[when(k){"type"->0 "color"->1 else->2}] == v }
```

***Or:***
```
fun countMatches(l: List<List<String>>, r: String, v: String) = arrayOf("type", "color", "name").run {
    l.count { it[indexOf(r)] == v }
}
```