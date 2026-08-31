# 4 line Kotlin - Simple

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/698466/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/698466/)

---

```
    fun checkIfCanBreak(s1: String, s2: String): Boolean {
        val a = s1.toCharArray().also { it.sort() }
        val b = s2.toCharArray().also { it.sort() }
        return a.withIndex().all { indexedValue -> indexedValue.value >= b[indexedValue.index] } || 
               b.withIndex().all { indexedValue -> indexedValue.value >= a[indexedValue.index] }
    }
```