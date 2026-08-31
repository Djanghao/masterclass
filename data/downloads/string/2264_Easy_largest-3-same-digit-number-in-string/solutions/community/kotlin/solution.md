# [Kotlin] an FP solution

**Author:** martin0327
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4359359/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4359359/)

---

```
class Solution {
    fun largestGoodInteger(s: String): String {
        return (9 downTo 0)
            .map { it.toString().repeat(3) }
            .find { s.contains(it) } ?: ""
    }
}
```