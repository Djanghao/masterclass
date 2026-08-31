# Kotlin 1 line

**Author:** GeorgCantor
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3773202/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3773202/)

---

```
fun maximumNumberOfStringPairs(a: Array<String>) = a.groupingBy { it.toSortedSet() }.eachCount().count { it.value > 1 }
```