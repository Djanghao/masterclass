# Kotlin 121 ms, 33.4 MB

**Author:** llerik
**Votes:** 0
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/4333065/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/4333065/)

---

# Code
```
class Solution {
    fun categorizeBox(length: Int, width: Int, height: Int, mass: Int): String {
        val isBulky =  when {
            maxOf(length, height, width) >= 1e4 -> true
            1e9 / length / width / height <= 1 -> true
            else -> false
        }
        return if (mass >= 100) {
            if (isBulky) {
                "Both"
            } else {
                "Heavy"
            }
        } else if (isBulky) {
            "Bulky"
        } else {
            "Neither"
        }
    }
}
```