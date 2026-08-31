# Kotlin

**Author:** GeorgCantor
**Votes:** 1
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1863597/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1863597/)

---

```
fun findingUsersActiveMinutes(a: Array<IntArray>, k: Int) = IntArray(k).apply {
    a.groupBy { it.first() }.mapValues { it.value.distinctBy { it.last() } }.entries.forEach {
        ++this[it.value.lastIndex]
    }
}
```