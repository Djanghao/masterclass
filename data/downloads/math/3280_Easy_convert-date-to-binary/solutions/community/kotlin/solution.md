# Kotlin Oneline

**Author:** recca_chao
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-date-to-binary/solutions/5881223/](https://leetcode.com/problems/convert-date-to-binary/solutions/5881223/)

---

# Code
```kotlin []
class Solution {
    fun convertDateToBinary(date: String) =
        date.split('-').joinToString("-") { it.toInt().toString(2) }
}
```